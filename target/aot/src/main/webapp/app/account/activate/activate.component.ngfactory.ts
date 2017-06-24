/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../../../node_modules/ng-jhipster/src/language/jhi-translate.directive.ngfactory';
import * as import2 from 'ng-jhipster/src/language/jhi-translate.directive';
import * as import3 from '@angular/common';
import * as import4 from '../../../../../../../../src/main/webapp/app/account/activate/activate.component';
import * as import5 from '../../../../../../../../src/main/webapp/app/account/activate/activate.service';
import * as import6 from '../../../../../../../../src/main/webapp/app/shared/login/login-modal.service';
import * as import7 from '@angular/router';
const styles_ActivateComponent:any[] = ([] as any[]);
export const RenderType_ActivateComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_ActivateComponent,
  data: {}
}
);
function View_ActivateComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),11,'div',[[
        'class',
        'alert alert-success'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'span',[[
        'jhiTranslate',
        'activate.messages.success'
      ]
    ],(null as any),(null as any),(null as any),import1.View_JhiTranslateComponent_0,import1.RenderType_JhiTranslateComponent)),
      import0.ɵdid(49152,(null as any),0,import2.JhiTranslateComponent,([] as any[]),{jhiTranslate: [
        0,
        'jhiTranslate'
      ]
    },(null as any)),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'strong',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Your user account has been activated.'])),
    (l()(),import0.ɵted((null as any),[' Please '])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'a',[
      [
        'class',
        'alert-link'
      ]
      ,
      [
        'jhiTranslate',
        'global.messages.info.authenticated.link'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.login()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },import1.View_JhiTranslateComponent_0,import1.RenderType_JhiTranslateComponent)),
      import0.ɵdid(49152,(null as any),0,import2.JhiTranslateComponent,([] as any[]),{jhiTranslate: [
        0,
        'jhiTranslate'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['sign in'])),
    (l()(),import0.ɵted((null as any),['.\n            ']))
  ]
  ,(ck,v) => {
    const currVal_0:any = 'activate.messages.success';
    ck(v,3,0,currVal_0);
    const currVal_1:any = 'global.messages.info.authenticated.link';
    ck(v,9,0,currVal_1);
  },(null as any));
}
function View_ActivateComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'div',[
      [
        'class',
        'alert alert-danger'
      ]
      ,
      [
        'jhiTranslate',
        'activate.messages.error'
      ]

    ]
    ,(null as any),(null as any),(null as any),import1.View_JhiTranslateComponent_0,import1.RenderType_JhiTranslateComponent)),
      import0.ɵdid(49152,(null as any),0,import2.JhiTranslateComponent,([] as any[]),{jhiTranslate: [
        0,
        'jhiTranslate'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'strong',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Your user could not be activated.'])),
    (l()(),import0.ɵted((null as any),[' Please use the registration form to sign up.\n            ']))
  ]
  ,(ck,v) => {
    const currVal_0:any = 'activate.messages.error';
    ck(v,1,0,currVal_0);
  },(null as any));
}
export function View_ActivateComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),17,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),14,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),11,'div',[[
        'class',
        'col-md-8 offset-md-2'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'h1',[[
        'jhiTranslate',
        'activate.title'
      ]
    ],(null as any),(null as any),(null as any),import1.View_JhiTranslateComponent_0,import1.RenderType_JhiTranslateComponent)),
      import0.ɵdid(49152,(null as any),0,import2.JhiTranslateComponent,([] as any[]),{jhiTranslate: [
        0,
        'jhiTranslate'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['Activation'])),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ActivateComponent_1)),
    import0.ɵdid(16384,(null as any),0,import3.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ActivateComponent_2)),
    import0.ɵdid(16384,(null as any),0,import3.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import4.ActivateComponent = v.component;
    const currVal_0:any = 'activate.title';
    ck(v,7,0,currVal_0);
    const currVal_1:any = co.success;
    ck(v,11,0,currVal_1);
    const currVal_2:any = co.error;
    ck(v,14,0,currVal_2);
  },(null as any));
}
function View_ActivateComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'jhi-activate',([] as any[]),(null as any),(null as any),(null as any),View_ActivateComponent_0,RenderType_ActivateComponent)),
    import0.ɵdid(114688,(null as any),0,import4.ActivateComponent,[
      import5.ActivateService,
      import6.LoginModalService,
      import7.ActivatedRoute
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const ActivateComponentNgFactory:import0.ComponentFactory<import4.ActivateComponent> = import0.ɵccf('jhi-activate',import4.ActivateComponent,View_ActivateComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21pbGFuZGVrZXQvd29yay91cHdvcmsvc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9taWxhbmRla2V0L3dvcmsvdXB3b3JrL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9taWxhbmRla2V0L3dvcmsvdXB3b3JrL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL21pbGFuZGVrZXQvd29yay91cHdvcmsvc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudC50cy5BY3RpdmF0ZUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggb2Zmc2V0LW1kLTJcIj5cbiAgICAgICAgICAgIDxoMSBqaGlUcmFuc2xhdGU9XCJhY3RpdmF0ZS50aXRsZVwiPkFjdGl2YXRpb248L2gxPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiICpuZ0lmPVwic3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGpoaVRyYW5zbGF0ZT1cImFjdGl2YXRlLm1lc3NhZ2VzLnN1Y2Nlc3NcIj48c3Ryb25nPllvdXIgdXNlciBhY2NvdW50IGhhcyBiZWVuIGFjdGl2YXRlZC48L3N0cm9uZz4gUGxlYXNlIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImFsZXJ0LWxpbmtcIiAoY2xpY2spPVwibG9naW4oKVwiIGpoaVRyYW5zbGF0ZT1cImdsb2JhbC5tZXNzYWdlcy5pbmZvLmF1dGhlbnRpY2F0ZWQubGlua1wiPnNpZ24gaW48L2E+LlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiAqbmdJZj1cImVycm9yXCIgamhpVHJhbnNsYXRlPVwiYWN0aXZhdGUubWVzc2FnZXMuZXJyb3JcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPllvdXIgdXNlciBjb3VsZCBub3QgYmUgYWN0aXZhdGVkLjwvc3Ryb25nPiBQbGVhc2UgdXNlIHRoZSByZWdpc3RyYXRpb24gZm9ybSB0byBzaWduIHVwLlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiIsIjxqaGktYWN0aXZhdGU+PC9qaGktYWN0aXZhdGU+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0tZO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBaUQ7TUFDN0M7UUFBQTtRQUFBO01BQUE7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQStDO0lBQVE7SUFBOEM7SUFBZTtJQUNwSDtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBc0I7UUFBQTtRQUFBO01BQUE7TUFBdEI7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQStGO0lBQVc7OztJQURwRztJQUFOLFNBQU0sU0FBTjtJQUN3QztJQUF4QyxTQUF3QyxTQUF4Qzs7Ozs7SUFHSjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFxRjtJQUNqRjtJQUFRO0lBQTBDOzs7SUFEUjtJQUE5QyxTQUE4QyxTQUE5Qzs7Ozs7SUFWWjtJQUFLO01BQ0Q7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFpQjtNQUNiO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBa0M7TUFDOUI7UUFBQTtRQUFBO01BQUE7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWtDO0lBQWU7SUFFakQ7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUdNO0lBRU47Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUVNO0lBRUo7SUFDSjtJQUNKOzs7O0lBYlU7SUFBSixTQUFJLFNBQUo7SUFFaUM7SUFBakMsVUFBaUMsU0FBakM7SUFLZ0M7SUFBaEMsVUFBZ0MsU0FBaEM7Ozs7O0lDVlo7Z0JBQUE7Ozs7SUFBQTtLQUFBOzs7SUFBQTs7OyJ9