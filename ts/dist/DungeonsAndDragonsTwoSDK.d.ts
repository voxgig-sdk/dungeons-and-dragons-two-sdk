import { ClassEntity } from './entity/ClassEntity';
import { FeatureEntity } from './entity/FeatureEntity';
import { MonsterEntity } from './entity/MonsterEntity';
import { SpellEntity } from './entity/SpellEntity';
export type * from './DungeonsAndDragonsTwoTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { DungeonsAndDragonsTwoEntityBase } from './DungeonsAndDragonsTwoEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class DungeonsAndDragonsTwoSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Class(entopts?: Record<string, any>): ClassEntity;
    Feature(entopts?: Record<string, any>): FeatureEntity;
    Monster(entopts?: Record<string, any>): MonsterEntity;
    Spell(entopts?: Record<string, any>): SpellEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): DungeonsAndDragonsTwoSDK;
    tester(testopts?: any, sdkopts?: any): DungeonsAndDragonsTwoSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof DungeonsAndDragonsTwoSDK;
export { stdutil, config, BaseFeature, DungeonsAndDragonsTwoEntityBase, DungeonsAndDragonsTwoSDK, SDK, };
export type { DirectResult };
