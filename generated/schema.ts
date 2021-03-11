// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Vault extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Vault entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Vault entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Vault", id.toString(), this);
  }

  static load(id: string): Vault | null {
    return store.get("Vault", id) as Vault | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get redeems(): Array<string> | null {
    let value = this.get("redeems");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set redeems(value: Array<string> | null) {
    if (value === null) {
      this.unset("redeems");
    } else {
      this.set("redeems", Value.fromStringArray(value as Array<string>));
    }
  }

  get mints(): Array<string> | null {
    let value = this.get("mints");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set mints(value: Array<string> | null) {
    if (value === null) {
      this.unset("mints");
    } else {
      this.set("mints", Value.fromStringArray(value as Array<string>));
    }
  }

  get tokenBalance(): BigInt | null {
    let value = this.get("tokenBalance");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokenBalance(value: BigInt | null) {
    if (value === null) {
      this.unset("tokenBalance");
    } else {
      this.set("tokenBalance", Value.fromBigInt(value as BigInt));
    }
  }

  get ethBalance(): BigInt | null {
    let value = this.get("ethBalance");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set ethBalance(value: BigInt | null) {
    if (value === null) {
      this.unset("ethBalance");
    } else {
      this.set("ethBalance", Value.fromBigInt(value as BigInt));
    }
  }

  get xTokenAddress(): Bytes | null {
    let value = this.get("xTokenAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set xTokenAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("xTokenAddress");
    } else {
      this.set("xTokenAddress", Value.fromBytes(value as Bytes));
    }
  }

  get assetAddress(): Bytes | null {
    let value = this.get("assetAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set assetAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("assetAddress");
    } else {
      this.set("assetAddress", Value.fromBytes(value as Bytes));
    }
  }
}

export class MintEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MintEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MintEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MintEntity", id.toString(), this);
  }

  static load(id: string): MintEntity | null {
    return store.get("MintEntity", id) as MintEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vaultId(): string | null {
    let value = this.get("vaultId");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set vaultId(value: string | null) {
    if (value === null) {
      this.unset("vaultId");
    } else {
      this.set("vaultId", Value.fromString(value as string));
    }
  }

  get sender(): Bytes | null {
    let value = this.get("sender");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes | null) {
    if (value === null) {
      this.unset("sender");
    } else {
      this.set("sender", Value.fromBytes(value as Bytes));
    }
  }

  get nftIds(): Array<BigInt> | null {
    let value = this.get("nftIds");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set nftIds(value: Array<BigInt> | null) {
    if (value === null) {
      this.unset("nftIds");
    } else {
      this.set("nftIds", Value.fromBigIntArray(value as Array<BigInt>));
    }
  }
}

export class RedeemEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RedeemEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RedeemEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RedeemEntity", id.toString(), this);
  }

  static load(id: string): RedeemEntity | null {
    return store.get("RedeemEntity", id) as RedeemEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vaultId(): string | null {
    let value = this.get("vaultId");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set vaultId(value: string | null) {
    if (value === null) {
      this.unset("vaultId");
    } else {
      this.set("vaultId", Value.fromString(value as string));
    }
  }

  get sender(): Bytes | null {
    let value = this.get("sender");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes | null) {
    if (value === null) {
      this.unset("sender");
    } else {
      this.set("sender", Value.fromBytes(value as Bytes));
    }
  }

  get nftIds(): Array<BigInt> | null {
    let value = this.get("nftIds");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set nftIds(value: Array<BigInt> | null) {
    if (value === null) {
      this.unset("nftIds");
    } else {
      this.set("nftIds", Value.fromBigIntArray(value as Array<BigInt>));
    }
  }
}
