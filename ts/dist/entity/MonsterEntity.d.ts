import { DungeonsAndDragonsTwoEntityBase } from '../DungeonsAndDragonsTwoEntityBase';
import type { DungeonsAndDragonsTwoSDK } from '../DungeonsAndDragonsTwoSDK';
import type { Control } from '../types';
import type { Monster, MonsterLoadMatch, MonsterListMatch } from '../DungeonsAndDragonsTwoTypes';
declare class MonsterEntity extends DungeonsAndDragonsTwoEntityBase<Monster> {
    constructor(client: DungeonsAndDragonsTwoSDK, entopts: any);
    make(this: MonsterEntity): MonsterEntity;
    load(this: any, reqmatch?: MonsterLoadMatch, ctrl?: Control): Promise<MonsterEntity>;
    list(this: any, reqmatch?: MonsterListMatch, ctrl?: Control): Promise<MonsterEntity[]>;
}
export { MonsterEntity };
