/* eslint-disable @typescript-eslint/no-empty-function */
import { IState, ITriggers } from 'src/_redux/types';
import {
  InitArgsType,
  ScriptOptsType,
  WatchArgsType,
} from '../../../../v1-core/lib/types';
import { Script } from '../../../../v1-core/lib/interfaces/IScript';
import { IPopupTriggers } from '../popup.config';

export class OpenPopupScript extends Script<
  ITriggers,
  IState,
  'openPopup',
  'init',
  {}
> {
  constructor(public opts: ScriptOptsType<ITriggers, IState, 'openPopup'>) {
    super();
  }

  public init(args: InitArgsType<IPopupTriggers, 'openPopup', 'init'>) {
    console.log(this.opts.getCurrentState().popup);
    // here we can implement popup queue
  }

  public watch(args: WatchArgsType<IPopupTriggers, 'openPopup'>) {}
}
