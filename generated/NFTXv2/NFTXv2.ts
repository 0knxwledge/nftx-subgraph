// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Mint extends ethereum.Event {
  get params(): Mint__Params {
    return new Mint__Params(this);
  }
}

export class Mint__Params {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get vaultId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nftIds(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get d2Amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class MintRequested extends ethereum.Event {
  get params(): MintRequested__Params {
    return new MintRequested__Params(this);
  }
}

export class MintRequested__Params {
  _event: MintRequested;

  constructor(event: MintRequested) {
    this._event = event;
  }

  get vaultId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nftIds(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NewVault extends ethereum.Event {
  get params(): NewVault__Params {
    return new NewVault__Params(this);
  }
}

export class NewVault__Params {
  _event: NewVault;

  constructor(event: NewVault) {
    this._event = event;
  }

  get vaultId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Redeem extends ethereum.Event {
  get params(): Redeem__Params {
    return new Redeem__Params(this);
  }
}

export class Redeem__Params {
  _event: Redeem;

  constructor(event: Redeem) {
    this._event = event;
  }

  get vaultId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nftIds(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get d2Amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class NFTXv2 extends ethereum.SmartContract {
  static bind(address: Address): NFTXv2 {
    return new NFTXv2("NFTXv2", address);
  }

  _calcBounty(vaultId: BigInt, numTokens: BigInt, isBurn: boolean): BigInt {
    let result = super.call(
      "_calcBounty",
      "_calcBounty(uint256,uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(vaultId),
        ethereum.Value.fromUnsignedBigInt(numTokens),
        ethereum.Value.fromBoolean(isBurn)
      ]
    );

    return result[0].toBigInt();
  }

  try__calcBounty(
    vaultId: BigInt,
    numTokens: BigInt,
    isBurn: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_calcBounty",
      "_calcBounty(uint256,uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(vaultId),
        ethereum.Value.fromUnsignedBigInt(numTokens),
        ethereum.Value.fromBoolean(isBurn)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _calcBountyD2(vaultId: BigInt, amount: BigInt, isBurn: boolean): BigInt {
    let result = super.call(
      "_calcBountyD2",
      "_calcBountyD2(uint256,uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(vaultId),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromBoolean(isBurn)
      ]
    );

    return result[0].toBigInt();
  }

  try__calcBountyD2(
    vaultId: BigInt,
    amount: BigInt,
    isBurn: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_calcBountyD2",
      "_calcBountyD2(uint256,uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(vaultId),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromBoolean(isBurn)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createVault(
    _xTokenAddress: Address,
    _assetAddress: Address,
    _isD2Vault: boolean
  ): BigInt {
    let result = super.call(
      "createVault",
      "createVault(address,address,bool):(uint256)",
      [
        ethereum.Value.fromAddress(_xTokenAddress),
        ethereum.Value.fromAddress(_assetAddress),
        ethereum.Value.fromBoolean(_isD2Vault)
      ]
    );

    return result[0].toBigInt();
  }

  try_createVault(
    _xTokenAddress: Address,
    _assetAddress: Address,
    _isD2Vault: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createVault",
      "createVault(address,address,bool):(uint256)",
      [
        ethereum.Value.fromAddress(_xTokenAddress),
        ethereum.Value.fromAddress(_assetAddress),
        ethereum.Value.fromBoolean(_isD2Vault)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isEligible(vaultId: BigInt, nftId: BigInt): boolean {
    let result = super.call(
      "isEligible",
      "isEligible(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(vaultId),
        ethereum.Value.fromUnsignedBigInt(nftId)
      ]
    );

    return result[0].toBoolean();
  }

  try_isEligible(vaultId: BigInt, nftId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isEligible",
      "isEligible(uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(vaultId),
        ethereum.Value.fromUnsignedBigInt(nftId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  store(): Address {
    let result = super.call("store", "store():(address)", []);

    return result[0].toAddress();
  }

  try_store(): ethereum.CallResult<Address> {
    let result = super.tryCall("store", "store():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  vaultSize(vaultId: BigInt): BigInt {
    let result = super.call("vaultSize", "vaultSize(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(vaultId)
    ]);

    return result[0].toBigInt();
  }

  try_vaultSize(vaultId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("vaultSize", "vaultSize(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(vaultId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ApproveMintRequestCall extends ethereum.Call {
  get inputs(): ApproveMintRequestCall__Inputs {
    return new ApproveMintRequestCall__Inputs(this);
  }

  get outputs(): ApproveMintRequestCall__Outputs {
    return new ApproveMintRequestCall__Outputs(this);
  }
}

export class ApproveMintRequestCall__Inputs {
  _call: ApproveMintRequestCall;

  constructor(call: ApproveMintRequestCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get nftIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class ApproveMintRequestCall__Outputs {
  _call: ApproveMintRequestCall;

  constructor(call: ApproveMintRequestCall) {
    this._call = call;
  }
}

export class ChangeTokenNameCall extends ethereum.Call {
  get inputs(): ChangeTokenNameCall__Inputs {
    return new ChangeTokenNameCall__Inputs(this);
  }

  get outputs(): ChangeTokenNameCall__Outputs {
    return new ChangeTokenNameCall__Outputs(this);
  }
}

export class ChangeTokenNameCall__Inputs {
  _call: ChangeTokenNameCall;

  constructor(call: ChangeTokenNameCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newName(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ChangeTokenNameCall__Outputs {
  _call: ChangeTokenNameCall;

  constructor(call: ChangeTokenNameCall) {
    this._call = call;
  }
}

export class ChangeTokenSymbolCall extends ethereum.Call {
  get inputs(): ChangeTokenSymbolCall__Inputs {
    return new ChangeTokenSymbolCall__Inputs(this);
  }

  get outputs(): ChangeTokenSymbolCall__Outputs {
    return new ChangeTokenSymbolCall__Outputs(this);
  }
}

export class ChangeTokenSymbolCall__Inputs {
  _call: ChangeTokenSymbolCall;

  constructor(call: ChangeTokenSymbolCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newSymbol(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ChangeTokenSymbolCall__Outputs {
  _call: ChangeTokenSymbolCall;

  constructor(call: ChangeTokenSymbolCall) {
    this._call = call;
  }
}

export class CloseVaultCall extends ethereum.Call {
  get inputs(): CloseVaultCall__Inputs {
    return new CloseVaultCall__Inputs(this);
  }

  get outputs(): CloseVaultCall__Outputs {
    return new CloseVaultCall__Outputs(this);
  }
}

export class CloseVaultCall__Inputs {
  _call: CloseVaultCall;

  constructor(call: CloseVaultCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CloseVaultCall__Outputs {
  _call: CloseVaultCall;

  constructor(call: CloseVaultCall) {
    this._call = call;
  }
}

export class CreateVaultCall extends ethereum.Call {
  get inputs(): CreateVaultCall__Inputs {
    return new CreateVaultCall__Inputs(this);
  }

  get outputs(): CreateVaultCall__Outputs {
    return new CreateVaultCall__Outputs(this);
  }
}

export class CreateVaultCall__Inputs {
  _call: CreateVaultCall;

  constructor(call: CreateVaultCall) {
    this._call = call;
  }

  get _xTokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _assetAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _isD2Vault(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class CreateVaultCall__Outputs {
  _call: CreateVaultCall;

  constructor(call: CreateVaultCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class DepositETHCall extends ethereum.Call {
  get inputs(): DepositETHCall__Inputs {
    return new DepositETHCall__Inputs(this);
  }

  get outputs(): DepositETHCall__Outputs {
    return new DepositETHCall__Outputs(this);
  }
}

export class DepositETHCall__Inputs {
  _call: DepositETHCall;

  constructor(call: DepositETHCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositETHCall__Outputs {
  _call: DepositETHCall;

  constructor(call: DepositETHCall) {
    this._call = call;
  }
}

export class FinalizeVaultCall extends ethereum.Call {
  get inputs(): FinalizeVaultCall__Inputs {
    return new FinalizeVaultCall__Inputs(this);
  }

  get outputs(): FinalizeVaultCall__Outputs {
    return new FinalizeVaultCall__Outputs(this);
  }
}

export class FinalizeVaultCall__Inputs {
  _call: FinalizeVaultCall;

  constructor(call: FinalizeVaultCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class FinalizeVaultCall__Outputs {
  _call: FinalizeVaultCall;

  constructor(call: FinalizeVaultCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get storeAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get nftIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get d2Amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RedeemCall extends ethereum.Call {
  get inputs(): RedeemCall__Inputs {
    return new RedeemCall__Inputs(this);
  }

  get outputs(): RedeemCall__Outputs {
    return new RedeemCall__Outputs(this);
  }
}

export class RedeemCall__Inputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RedeemCall__Outputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RequestMintCall extends ethereum.Call {
  get inputs(): RequestMintCall__Inputs {
    return new RequestMintCall__Inputs(this);
  }

  get outputs(): RequestMintCall__Outputs {
    return new RequestMintCall__Outputs(this);
  }
}

export class RequestMintCall__Inputs {
  _call: RequestMintCall;

  constructor(call: RequestMintCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get nftIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class RequestMintCall__Outputs {
  _call: RequestMintCall;

  constructor(call: RequestMintCall) {
    this._call = call;
  }
}

export class RevokeMintRequestsCall extends ethereum.Call {
  get inputs(): RevokeMintRequestsCall__Inputs {
    return new RevokeMintRequestsCall__Inputs(this);
  }

  get outputs(): RevokeMintRequestsCall__Outputs {
    return new RevokeMintRequestsCall__Outputs(this);
  }
}

export class RevokeMintRequestsCall__Inputs {
  _call: RevokeMintRequestsCall;

  constructor(call: RevokeMintRequestsCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get nftIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class RevokeMintRequestsCall__Outputs {
  _call: RevokeMintRequestsCall;

  constructor(call: RevokeMintRequestsCall) {
    this._call = call;
  }
}

export class SetAllowMintRequestsCall extends ethereum.Call {
  get inputs(): SetAllowMintRequestsCall__Inputs {
    return new SetAllowMintRequestsCall__Inputs(this);
  }

  get outputs(): SetAllowMintRequestsCall__Outputs {
    return new SetAllowMintRequestsCall__Outputs(this);
  }
}

export class SetAllowMintRequestsCall__Inputs {
  _call: SetAllowMintRequestsCall;

  constructor(call: SetAllowMintRequestsCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get isAllowed(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetAllowMintRequestsCall__Outputs {
  _call: SetAllowMintRequestsCall;

  constructor(call: SetAllowMintRequestsCall) {
    this._call = call;
  }
}

export class SetBurnFeesCall extends ethereum.Call {
  get inputs(): SetBurnFeesCall__Inputs {
    return new SetBurnFeesCall__Inputs(this);
  }

  get outputs(): SetBurnFeesCall__Outputs {
    return new SetBurnFeesCall__Outputs(this);
  }
}

export class SetBurnFeesCall__Inputs {
  _call: SetBurnFeesCall;

  constructor(call: SetBurnFeesCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _ethBase(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _ethStep(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetBurnFeesCall__Outputs {
  _call: SetBurnFeesCall;

  constructor(call: SetBurnFeesCall) {
    this._call = call;
  }
}

export class SetFlipEligOnRedeemCall extends ethereum.Call {
  get inputs(): SetFlipEligOnRedeemCall__Inputs {
    return new SetFlipEligOnRedeemCall__Inputs(this);
  }

  get outputs(): SetFlipEligOnRedeemCall__Outputs {
    return new SetFlipEligOnRedeemCall__Outputs(this);
  }
}

export class SetFlipEligOnRedeemCall__Inputs {
  _call: SetFlipEligOnRedeemCall;

  constructor(call: SetFlipEligOnRedeemCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get flipElig(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetFlipEligOnRedeemCall__Outputs {
  _call: SetFlipEligOnRedeemCall;

  constructor(call: SetFlipEligOnRedeemCall) {
    this._call = call;
  }
}

export class SetIsEligibleCall extends ethereum.Call {
  get inputs(): SetIsEligibleCall__Inputs {
    return new SetIsEligibleCall__Inputs(this);
  }

  get outputs(): SetIsEligibleCall__Outputs {
    return new SetIsEligibleCall__Outputs(this);
  }
}

export class SetIsEligibleCall__Inputs {
  _call: SetIsEligibleCall;

  constructor(call: SetIsEligibleCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get nftIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _boolean(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class SetIsEligibleCall__Outputs {
  _call: SetIsEligibleCall;

  constructor(call: SetIsEligibleCall) {
    this._call = call;
  }
}

export class SetManagerCall extends ethereum.Call {
  get inputs(): SetManagerCall__Inputs {
    return new SetManagerCall__Inputs(this);
  }

  get outputs(): SetManagerCall__Outputs {
    return new SetManagerCall__Outputs(this);
  }
}

export class SetManagerCall__Inputs {
  _call: SetManagerCall;

  constructor(call: SetManagerCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newManager(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetManagerCall__Outputs {
  _call: SetManagerCall;

  constructor(call: SetManagerCall) {
    this._call = call;
  }
}

export class SetMintFeesCall extends ethereum.Call {
  get inputs(): SetMintFeesCall__Inputs {
    return new SetMintFeesCall__Inputs(this);
  }

  get outputs(): SetMintFeesCall__Outputs {
    return new SetMintFeesCall__Outputs(this);
  }
}

export class SetMintFeesCall__Inputs {
  _call: SetMintFeesCall;

  constructor(call: SetMintFeesCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _ethBase(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _ethStep(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetMintFeesCall__Outputs {
  _call: SetMintFeesCall;

  constructor(call: SetMintFeesCall) {
    this._call = call;
  }
}

export class SetNegateEligibilityCall extends ethereum.Call {
  get inputs(): SetNegateEligibilityCall__Inputs {
    return new SetNegateEligibilityCall__Inputs(this);
  }

  get outputs(): SetNegateEligibilityCall__Outputs {
    return new SetNegateEligibilityCall__Outputs(this);
  }
}

export class SetNegateEligibilityCall__Inputs {
  _call: SetNegateEligibilityCall;

  constructor(call: SetNegateEligibilityCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get shouldNegate(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetNegateEligibilityCall__Outputs {
  _call: SetNegateEligibilityCall;

  constructor(call: SetNegateEligibilityCall) {
    this._call = call;
  }
}

export class SetPausedCall extends ethereum.Call {
  get inputs(): SetPausedCall__Inputs {
    return new SetPausedCall__Inputs(this);
  }

  get outputs(): SetPausedCall__Outputs {
    return new SetPausedCall__Outputs(this);
  }
}

export class SetPausedCall__Inputs {
  _call: SetPausedCall;

  constructor(call: SetPausedCall) {
    this._call = call;
  }

  get pauserId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _isPaused(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetPausedCall__Outputs {
  _call: SetPausedCall;

  constructor(call: SetPausedCall) {
    this._call = call;
  }
}

export class SetSupplierBountyCall extends ethereum.Call {
  get inputs(): SetSupplierBountyCall__Inputs {
    return new SetSupplierBountyCall__Inputs(this);
  }

  get outputs(): SetSupplierBountyCall__Outputs {
    return new SetSupplierBountyCall__Outputs(this);
  }
}

export class SetSupplierBountyCall__Inputs {
  _call: SetSupplierBountyCall;

  constructor(call: SetSupplierBountyCall) {
    this._call = call;
  }

  get vaultId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get ethMax(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get length(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetSupplierBountyCall__Outputs {
  _call: SetSupplierBountyCall;

  constructor(call: SetSupplierBountyCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
