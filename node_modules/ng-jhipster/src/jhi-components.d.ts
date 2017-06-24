import { JhiFilterPipe, JhiKeysPipe, JhiOrderByPipe, JhiTruncateCharactersPipe } from './pipe';
import { JhiMaxbytesValidatorDirective, JhiMinbytesValidatorDirective, JhiSortDirective, JhiSortByDirective } from './directive';
import { JhiItemCountComponent } from './component';
import { JhiDataUtils, JhiDateUtils, JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiBase64Service, JhiAlertService } from './service';
export declare const JHI_PIPES: (typeof JhiTruncateCharactersPipe | typeof JhiOrderByPipe | typeof JhiFilterPipe | typeof JhiKeysPipe)[];
export declare const JHI_DIRECTIVES: (typeof JhiMaxbytesValidatorDirective | typeof JhiMinbytesValidatorDirective | typeof JhiSortDirective | typeof JhiSortByDirective)[];
export declare const JHI_COMPONENTS: typeof JhiItemCountComponent[];
export declare const JHI_SERVICES: (typeof JhiPaginationUtil | typeof JhiParseLinks | typeof JhiDataUtils | typeof JhiDateUtils | typeof JhiEventManager | typeof JhiAlertService | typeof JhiBase64Service)[];
