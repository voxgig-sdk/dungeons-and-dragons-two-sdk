import { DungeonsAndDragonsTwoEntityBase } from '../DungeonsAndDragonsTwoEntityBase';
import type { DungeonsAndDragonsTwoSDK } from '../DungeonsAndDragonsTwoSDK';
import type { Control } from '../types';
import type { Class, ClassLoadMatch, ClassListMatch } from '../DungeonsAndDragonsTwoTypes';
declare class ClassEntity extends DungeonsAndDragonsTwoEntityBase<Class> {
    constructor(client: DungeonsAndDragonsTwoSDK, entopts: any);
    make(this: ClassEntity): ClassEntity;
    load(this: any, reqmatch?: ClassLoadMatch, ctrl?: Control): Promise<ClassEntity>;
    list(this: any, reqmatch?: ClassListMatch, ctrl?: Control): Promise<ClassEntity[]>;
}
export { ClassEntity };
