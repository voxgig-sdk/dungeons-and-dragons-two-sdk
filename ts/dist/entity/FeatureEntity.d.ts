import { DungeonsAndDragonsTwoEntityBase } from '../DungeonsAndDragonsTwoEntityBase';
import type { DungeonsAndDragonsTwoSDK } from '../DungeonsAndDragonsTwoSDK';
import type { Control } from '../types';
import type { Feature, FeatureLoadMatch, FeatureListMatch } from '../DungeonsAndDragonsTwoTypes';
declare class FeatureEntity extends DungeonsAndDragonsTwoEntityBase<Feature> {
    constructor(client: DungeonsAndDragonsTwoSDK, entopts: any);
    make(this: FeatureEntity): FeatureEntity;
    load(this: any, reqmatch?: FeatureLoadMatch, ctrl?: Control): Promise<FeatureEntity>;
    list(this: any, reqmatch?: FeatureListMatch, ctrl?: Control): Promise<FeatureEntity[]>;
}
export { FeatureEntity };
