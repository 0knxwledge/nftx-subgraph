import { XTokenSet, XTokenAddressSet, IsEligibleSet, NftAddressSet, NftSet, NewVaultAdded, TokenBalanceSet, EthBalanceSet } from '../generated/XStore/XStore'
import { Mint, MintRequested, NewVault, OwnershipTransferred, Redeem, CreateVaultCall } from '../generated/NFTX/NFTX'

import { Vault, MintEntity, RedeemEntity } from '../generated/schema'

export function handleNewVaultAdded(event: NewVaultAdded): void {
  let vaultId = event.params.vaultId.toHex()
  let vault = Vault.load(vaultId)
  if (vault == null) {
    vault = new Vault(vaultId)
  }
  vault.save()
}

export function handleTokenBalanceSet(event: TokenBalanceSet): void {
  let vaultId = event.params.vaultId.toHex()
  let vault = Vault.load(vaultId)
  if (vault == null) {
    vault = new Vault(vaultId)
  }
  vault.tokenBalance = event.params._tokenBalance
  vault.save()
}

export function handleEthBalanceSet(event: EthBalanceSet): void {
  let vaultId = event.params.vaultId.toHex()
  let vault = Vault.load(vaultId)
  if (vault == null) {
    vault = new Vault(vaultId)
  }
  vault.ethBalance = event.params._ethBalance
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
  let mint = MintEntity.load(mintId)
  if (mint == null) {
    mint = new MintEntity(mintId)
  }
  let vault = Vault.load(vaultId)
  if (vault == null) {
    vault = new Vault(vaultId)
  }
  mint.vaultId = vaultId
  mint.sender = event.params.sender
  mint.nftIds = event.params.nftIds
  mint.save()
  vault.save()
}

export function handleRedeem(event: Redeem): void {
  let vaultId = event.params.vaultId.toHex()
  let redeemId = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let redeem = RedeemEntity.load(redeemId)
  if (redeem == null) {
    redeem = new RedeemEntity(redeemId)
  }
  let vault = Vault.load(vaultId)
  if (vault == null) {
    vault = new Vault(vaultId)
  }
  redeem.vaultId = vaultId
  redeem.sender = event.params.sender
  redeem.nftIds = event.params.nftIds
  redeem.save()
  vault.save()
}