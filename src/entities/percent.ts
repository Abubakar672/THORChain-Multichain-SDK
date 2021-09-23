import BigNumber from 'bignumber.js';

import { Rounding } from './amount';
import { Amount } from './amount';

const _100_ = 100;

export class Percent extends Amount {
  toSignificant(
    significantDigits: number = 8,
    format: BigNumber.Format = { groupSeparator: '' },
    rounding: Rounding = Rounding.ROUND_DOWN,
  ): string {
    return this.mul(_100_).toSignificant(significantDigits, format, rounding);
  }

  toFixed(
    decimalPlaces: number = 8,
    format: BigNumber.Format = { groupSeparator: '' },
    rounding: Rounding = Rounding.ROUND_DOWN,
  ): string {
    return this.mul(_100_).toFixed(decimalPlaces, format, rounding);
  }
}
