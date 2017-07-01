import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { Neo4JhipsterSharedModule, UserRouteAccessService } from './shared';
import { Neo4JhipsterHomeModule } from './home/home.module';
import { Neo4JhipsterAdminModule } from './admin/admin.module';
import { Neo4JhipsterAccountModule } from './account/account.module';
import { Neo4JhipsterEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        Neo4JhipsterSharedModule,
        Neo4JhipsterHomeModule,
        Neo4JhipsterAdminModule,
        Neo4JhipsterAccountModule,
        Neo4JhipsterEntityModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class Neo4JhipsterAppModule {}
