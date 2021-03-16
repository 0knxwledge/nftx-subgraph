import { XTokenAddressSet, NftAddressSet, NewVaultAdded} from '../generated/XStore/XStore'
import { Mint, NewVault, Redeem, CreateVaultCall } from '../generated/NFTXv7/NFTXv7'
// import { Mint, NewVault, Redeem, CreateVaultCall } from '../generated/NFTX/NFTX'
// import { Mint, NewVault, Redeem, CreateVaultCall } from '../generated/NFTXv2/NFTXv2'
// import { Mint, NewVault, Redeem, CreateVaultCall } from '../generated/NFTXv3/NFTXv3'
// import { Mint, NewVault, Redeem, CreateVaultCall } from '../generated/NFTXv4/NFTXv4'
// import { Mint, NewVault, Redeem, CreateVaultCall } from '../generated/NFTXv5/NFTXv5'
// import { Mint, NewVault, Redeem, CreateVaultCall } from '../generated/NFTXv6/NFTXv6'
// import { Mint, NewVault, Redeem, CreateVaultCall } from '../generated/NFTXv7/NFTXv7'

import { Vault, MintEntity, RedeemEntity } from '../generated/schema'

export function handleNewVaultAdded(event: NewVaultAdded): void {
  let vaultId = event.params.vaultId.toHex()
  let vault = Vault.load(vaultId)
  if (vault == null) {
    vault = new Vault(vaultId)
  }
  vault.save()
}

export function handleCreateVault(call: CreateVaultCall): void {
  let vaultId = call.outputs.value0.toHex()
  let vault = Vault.load(vaultId)
  if (vault == null) {
    vault = new Vault(vaultId)
  }
  vault.xTokenAddress = call.inputs._xTokenAddress
  vault.assetAddress = call.inputs._assetAddress
  vault.save()
}

export function handleXTokenAddressSet(event: XTokenAddressSet): void {
  let vaultId = event.params.vaultId.toHex()
  let vault = Vault.load(vaultId)
  if (vault == null) {
    vault = new Vault(vaultId)
  }
  vault.xTokenAddress = event.params.token
  vault.save()
}

export function handleNftAddressSet(event: NftAddressSet): void {
  let vaultId = event.params.vaultId.toHex()
  let vault = Vault.load(vaultId)
  if (vault == null) {
    vault = new Vault(vaultId)
  }
  vault.assetAddress = event.params.asset
  vault.save()
}

export function handleMint(event: Mint): void {
  let vaultId = event.params.vaultId.toHex()
  let mintId = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let vault = Vault.load(vaultId)
  if (vault == null) {
    vault = new Vault(vaultId)
  }
  let mint = MintEntity.load(mintId)
  if (mint == null) {
    mint = new MintEntity(mintId)
  }
  vault.save()
  mint.nftIds = event.params.nftIds
  mint.sender = event.params.sender
  mint.vault = vault.id
  mint.save()
  
  
}

export function handleRedeem(event: Redeem): void {
  let vaultId = event.params.vaultId.toHex()
  let redeemId = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let vault = Vault.load(vaultId)
  if (vault == null) {
    vault = new Vault(vaultId)
  }
  vault.save()
  let redeem = RedeemEntity.load(redeemId)
  if (redeem == null) {
    redeem = new RedeemEntity(redeemId)
  }
  redeem.vault = vault.id
  redeem.sender = event.params.sender
  redeem.nftIds = event.params.nftIds
  redeem.save()
}