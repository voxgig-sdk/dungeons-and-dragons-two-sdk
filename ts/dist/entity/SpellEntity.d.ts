import { DungeonsAndDragonsTwoEntityBase } from '../DungeonsAndDragonsTwoEntityBase';
import type { DungeonsAndDragonsTwoSDK } from '../DungeonsAndDragonsTwoSDK';
import type { Control } from '../types';
import type { Spell, SpellLoadMatch, SpellListMatch } from '../DungeonsAndDragonsTwoTypes';
declare class SpellEntity extends DungeonsAndDragonsTwoEntityBase<Spell> {
    constructor(client: DungeonsAndDragonsTwoSDK, entopts: any);
    make(this: SpellEntity): SpellEntity;
    load(this: any, reqmatch?: SpellLoadMatch, ctrl?: Control): Promise<SpellEntity>;
    list(this: any, reqmatch?: SpellListMatch, ctrl?: Control): Promise<SpellEntity[]>;
}
export { SpellEntity };
