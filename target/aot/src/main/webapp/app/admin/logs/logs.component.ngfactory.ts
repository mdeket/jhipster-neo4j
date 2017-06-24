/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../../../../node_modules/ng-jhipster/src/language/jhi-translate.directive.ngfactory';
import * as import3 from 'ng-jhipster/src/language/jhi-translate.directive';
import * as import4 from '@angular/forms';
import * as import5 from 'ng-jhipster/src/pipe/order-by.pipe';
import * as import6 from 'ng-jhipster/src/pipe/pure-filter.pipe';
import * as import7 from '../../../../../../../../src/main/webapp/app/admin/logs/logs.component';
import * as import8 from '../../../../../../../../src/main/webapp/app/admin/logs/logs.service';
const styles_LogsComponent:any[] = ([] as any[]);
export const RenderType_LogsComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_LogsComponent,
  data: {}
}
);
function View_LogsComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),29,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'small',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    import0.ɵpid(0,import1.SlicePipe,([] as any[])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),21,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'button',[[
        'class',
        'btn btn-sm'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.changeLevel(v.context.$implicit.name,'TRACE')) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(278528,(null as any),0,import1.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    (l()(),import0.ɵted((null as any),['TRACE'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'button',[[
        'class',
        'btn btn-sm'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.changeLevel(v.context.$implicit.name,'DEBUG')) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(278528,(null as any),0,import1.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    (l()(),import0.ɵted((null as any),['DEBUG'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'button',[[
        'class',
        'btn btn-sm'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.changeLevel(v.context.$implicit.name,'INFO')) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(278528,(null as any),0,import1.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    (l()(),import0.ɵted((null as any),['INFO'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'button',[[
        'class',
        'btn btn-sm'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.changeLevel(v.context.$implicit.name,'WARN')) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(278528,(null as any),0,import1.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    (l()(),import0.ɵted((null as any),['WARN'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'button',[[
        'class',
        'btn btn-sm'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.changeLevel(v.context.$implicit.name,'ERROR')) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(278528,(null as any),0,import1.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    (l()(),import0.ɵted((null as any),['ERROR'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(ck,v) => {
    const currVal_1:any = 'btn btn-sm';
    const currVal_2:any = ((v.context.$implicit.level == 'TRACE')? 'btn-danger': 'btn-secondary');
    ck(v,10,0,currVal_1,currVal_2);
    const currVal_3:any = 'btn btn-sm';
    const currVal_4:any = ((v.context.$implicit.level == 'DEBUG')? 'btn-warning': 'btn-secondary');
    ck(v,14,0,currVal_3,currVal_4);
    const currVal_5:any = 'btn btn-sm';
    const currVal_6:any = ((v.context.$implicit.level == 'INFO')? 'btn-info': 'btn-secondary');
    ck(v,18,0,currVal_5,currVal_6);
    const currVal_7:any = 'btn btn-sm';
    const currVal_8:any = ((v.context.$implicit.level == 'WARN')? 'btn-success': 'btn-secondary');
    ck(v,22,0,currVal_7,currVal_8);
    const currVal_9:any = 'btn btn-sm';
    const currVal_10:any = ((v.context.$implicit.level == 'ERROR')? 'btn-primary': 'btn-secondary');
    ck(v,26,0,currVal_9,currVal_10);
  },(ck,v) => {
    const currVal_0:any = import0.ɵunv(v,4,0,import0.ɵnov(v,5).transform(v.context.$implicit.name,0,140));
    ck(v,4,0,currVal_0);
  });
}
function View_LogsComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),45,'div',[[
        'class',
        'table-responsive'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'h2',[[
        'jhiTranslate',
        'logs.title'
      ]
    ],(null as any),(null as any),(null as any),import2.View_JhiTranslateComponent_0,import2.RenderType_JhiTranslateComponent)),
      import0.ɵdid(49152,(null as any),0,import3.JhiTranslateComponent,([] as any[]),{jhiTranslate: [
        0,
        'jhiTranslate'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['Logs'])),
    (l()(),import0.ɵted((null as any),['\n\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'p',[[
        'jhiTranslate',
        'logs.nbloggers'
      ]
    ],(null as any),(null as any),(null as any),import2.View_JhiTranslateComponent_0,import2.RenderType_JhiTranslateComponent)),
    import0.ɵdid(49152,(null as any),0,import3.JhiTranslateComponent,([] as any[]),{
      jhiTranslate: [
        0,
        'jhiTranslate'
      ]
      ,
      translateValues: [
        1,
        'translateValues'
      ]

    }
    ,(null as any)),
    (l()(),import0.ɵted((null as any),[
      'There are ',
      ' loggers.'
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'span',[[
        'jhiTranslate',
        'logs.filter'
      ]
    ],(null as any),(null as any),(null as any),import2.View_JhiTranslateComponent_0,import2.RenderType_JhiTranslateComponent)),
      import0.ɵdid(49152,(null as any),0,import3.JhiTranslateComponent,([] as any[]),{jhiTranslate: [
        0,
        'jhiTranslate'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['Filter'])),
    (l()(),import0.ɵted((null as any),[' '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'type',
        'text'
      ]

    ]
    ,[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('input' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,15)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,15).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import0.ɵnov(v,15)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import0.ɵnov(v,15)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      if (('ngModelChange' === en)) {
        const pd_4:any = ((<any>(co.filter = $event)) !== false);
        ad = (pd_4 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(16384,(null as any),0,import4.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef,
      [
        2,
        import4.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
    import0.ɵprd(1024,(null as any),import4.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import4.DefaultValueAccessor]),
    import0.ɵdid(671744,(null as any),0,import4.NgModel,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import4.NG_VALUE_ACCESSOR
      ]

    ]
      ,{model: [
        0,
        'model'
      ]
    },{update: 'ngModelChange'}),
    import0.ɵprd(2048,(null as any),import4.NgControl,(null as any),[import4.NgModel]),
    import0.ɵdid(16384,(null as any),0,import4.NgControlStatus,[import4.NgControl],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),23,'table',[[
        'class',
        'table table-condensed table-striped table-bordered'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),14,'thead',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),11,'tr',[[
        'title',
        'click to order'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'th',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        co.orderProp = 'name';
        const pd_0:any = ((<any>(co.reverse = !co.reverse)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'span',[[
        'jhiTranslate',
        'logs.table.name'
      ]
    ],(null as any),(null as any),(null as any),import2.View_JhiTranslateComponent_0,import2.RenderType_JhiTranslateComponent)),
      import0.ɵdid(49152,(null as any),0,import3.JhiTranslateComponent,([] as any[]),{jhiTranslate: [
        0,
        'jhiTranslate'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['Name'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'th',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        co.orderProp = 'level';
        const pd_0:any = ((<any>(co.reverse = !co.reverse)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'span',[[
        'jhiTranslate',
        'logs.table.level'
      ]
    ],(null as any),(null as any),(null as any),import2.View_JhiTranslateComponent_0,import2.RenderType_JhiTranslateComponent)),
      import0.ɵdid(49152,(null as any),0,import3.JhiTranslateComponent,([] as any[]),{jhiTranslate: [
        0,
        'jhiTranslate'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['Level'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'tbody',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),3,(null as any),View_LogsComponent_2)),
    import0.ɵdid(802816,(null as any),0,import1.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    import0.ɵppd(3),
    import0.ɵppd(3),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = 'logs.title';
    ck(v,3,0,currVal_0);
    const currVal_1:any = 'logs.nbloggers';
    const currVal_2:any = import0.ɵinlineInterpolate(1,'{total: \'',co.loggers.length,'\'}');
    ck(v,7,0,currVal_1,currVal_2);
    const currVal_4:any = 'logs.filter';
    ck(v,11,0,currVal_4);
    const currVal_12:any = co.filter;
    ck(v,17,0,currVal_12);
    const currVal_13:any = 'logs.table.name';
    ck(v,29,0,currVal_13);
    const currVal_14:any = 'logs.table.level';
    ck(v,34,0,currVal_14);
    const currVal_15:any = import0.ɵunv(v,41,0,ck(v,43,0,import0.ɵnov((<any>v.parent),0),import0.ɵunv(v,41,0,ck(v,42,0,import0.ɵnov((<any>v.parent),1),co.loggers,co.filter,'name')),co.orderProp,co.reverse));
    ck(v,41,0,currVal_15);
  },(ck,v) => {
    var co:any = v.component;
    const currVal_3:any = co.loggers.length;
    ck(v,8,0,currVal_3);
    const currVal_5:any = import0.ɵnov(v,19).ngClassUntouched;
    const currVal_6:any = import0.ɵnov(v,19).ngClassTouched;
    const currVal_7:any = import0.ɵnov(v,19).ngClassPristine;
    const currVal_8:any = import0.ɵnov(v,19).ngClassDirty;
    const currVal_9:any = import0.ɵnov(v,19).ngClassValid;
    const currVal_10:any = import0.ɵnov(v,19).ngClassInvalid;
    const currVal_11:any = import0.ɵnov(v,19).ngClassPending;
    ck(v,14,0,currVal_5,currVal_6,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11);
  });
}
export function View_LogsComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵpid(0,import5.JhiOrderByPipe,([] as any[])),
    import0.ɵpid(0,import6.JhiPureFilterPipe,([] as any[])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_LogsComponent_1)),
    import0.ɵdid(16384,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import7.LogsComponent = v.component;
    const currVal_0:any = co.loggers;
    ck(v,3,0,currVal_0);
  },(null as any));
}
function View_LogsComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'jhi-logs',([] as any[]),(null as any),(null as any),(null as any),View_LogsComponent_0,RenderType_LogsComponent)),
    import0.ɵdid(114688,(null as any),0,import7.LogsComponent,[import8.LogsService],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const LogsComponentNgFactory:import0.ComponentFactory<import7.LogsComponent> = import0.ɵccf('jhi-logs',import7.LogsComponent,View_LogsComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21pbGFuZGVrZXQvd29yay91cHdvcmsvc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL21pbGFuZGVrZXQvd29yay91cHdvcmsvc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvbWlsYW5kZWtldC93b3JrL3Vwd29yay9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL21pbGFuZGVrZXQvd29yay91cHdvcmsvc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50LnRzLkxvZ3NDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiICpuZ0lmPVwibG9nZ2Vyc1wiPlxuICAgIDxoMiBqaGlUcmFuc2xhdGU9XCJsb2dzLnRpdGxlXCI+TG9nczwvaDI+XG5cbiAgICA8cCBqaGlUcmFuc2xhdGU9XCJsb2dzLm5ibG9nZ2Vyc1wiIHRyYW5zbGF0ZVZhbHVlcz1cInt0b3RhbDogJ3t7IGxvZ2dlcnMubGVuZ3RoIH19J31cIj5UaGVyZSBhcmUge3sgbG9nZ2Vycy5sZW5ndGggfX0gbG9nZ2Vycy48L3A+XG5cbiAgICA8c3BhbiBqaGlUcmFuc2xhdGU9XCJsb2dzLmZpbHRlclwiPkZpbHRlcjwvc3Bhbj4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuXG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtY29uZGVuc2VkIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICA8dHIgdGl0bGU9XCJjbGljayB0byBvcmRlclwiPlxuICAgICAgICAgICAgPHRoIChjbGljayk9XCJvcmRlclByb3AgPSAnbmFtZSc7IHJldmVyc2U9IXJldmVyc2VcIj48c3BhbiBqaGlUcmFuc2xhdGU9XCJsb2dzLnRhYmxlLm5hbWVcIj5OYW1lPC9zcGFuPjwvdGg+XG4gICAgICAgICAgICA8dGggKGNsaWNrKT1cIm9yZGVyUHJvcCA9ICdsZXZlbCc7IHJldmVyc2U9IXJldmVyc2VcIj48c3BhbiBqaGlUcmFuc2xhdGU9XCJsb2dzLnRhYmxlLmxldmVsXCI+TGV2ZWw8L3NwYW4+PC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cblxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGxvZ2dlciBvZiAobG9nZ2VycyB8IHB1cmVGaWx0ZXI6ZmlsdGVyOiduYW1lJyB8IG9yZGVyQnk6b3JkZXJQcm9wOnJldmVyc2UpXCI+XG4gICAgICAgICAgICA8dGQ+PHNtYWxsPnt7bG9nZ2VyLm5hbWUgfCBzbGljZTowOjE0MH19PC9zbWFsbD48L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZUxldmVsKGxvZ2dlci5uYW1lLCAnVFJBQ0UnKVwiIFtuZ0NsYXNzXT1cIihsb2dnZXIubGV2ZWw9PSdUUkFDRScpID8gJ2J0bi1kYW5nZXInIDogJ2J0bi1zZWNvbmRhcnknXCIgY2xhc3M9XCJidG4gYnRuLXNtXCI+VFJBQ0U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2VMZXZlbChsb2dnZXIubmFtZSwgJ0RFQlVHJylcIiBbbmdDbGFzc109XCIobG9nZ2VyLmxldmVsPT0nREVCVUcnKSA/ICdidG4td2FybmluZycgOiAnYnRuLXNlY29uZGFyeSdcIiBjbGFzcz1cImJ0biBidG4tc21cIj5ERUJVRzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZUxldmVsKGxvZ2dlci5uYW1lLCAnSU5GTycpXCIgW25nQ2xhc3NdPVwiKGxvZ2dlci5sZXZlbD09J0lORk8nKSA/ICdidG4taW5mbycgOiAnYnRuLXNlY29uZGFyeSdcIiBjbGFzcz1cImJ0biBidG4tc21cIj5JTkZPPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlTGV2ZWwobG9nZ2VyLm5hbWUsICdXQVJOJylcIiBbbmdDbGFzc109XCIobG9nZ2VyLmxldmVsPT0nV0FSTicpID8gJ2J0bi1zdWNjZXNzJyA6ICdidG4tc2Vjb25kYXJ5J1wiIGNsYXNzPVwiYnRuIGJ0bi1zbVwiPldBUk48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2VMZXZlbChsb2dnZXIubmFtZSwgJ0VSUk9SJylcIiBbbmdDbGFzc109XCIobG9nZ2VyLmxldmVsPT0nRVJST1InKSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLXNlY29uZGFyeSdcIiBjbGFzcz1cImJ0biBidG4tc21cIj5FUlJPUjwvYnV0dG9uPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuPC9kaXY+XG4iLCI8amhpLWxvZ3M+PC9qaGktbG9ncz4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2VRO0lBQTRGO0lBQ3hGO0lBQUk7SUFBTztNQUFBO01BQUE7SUFBQTtJQUFBO2dCQUFBO0lBQTBDO0lBQ3JEO0lBQUk7TUFDQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQVE7UUFBQTtRQUFBO01BQUE7TUFBUjtJQUFBO2dCQUFBOzs7OztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQTRJO0lBQWM7TUFDMUo7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFRO1FBQUE7UUFBQTtNQUFBO01BQVI7SUFBQTtnQkFBQTs7Ozs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUE2STtJQUFjO01BQzNKO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBUTtRQUFBO1FBQUE7TUFBQTtNQUFSO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBd0k7SUFBYTtNQUNySjtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQVE7UUFBQTtRQUFBO01BQUE7TUFBUjtJQUFBO2dCQUFBOzs7OztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQTJJO0lBQWE7TUFDeEo7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFRO1FBQUE7UUFBQTtNQUFBO01BQVI7SUFBQTtnQkFBQTs7Ozs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUE2STtJQUFjO0lBQzFKOzs7SUFMd0g7SUFBckU7SUFBcEQsVUFBeUgsVUFBckUsU0FBcEQ7SUFDMEg7SUFBdEU7SUFBcEQsVUFBMEgsVUFBdEUsU0FBcEQ7SUFDcUg7SUFBbEU7SUFBbkQsVUFBcUgsVUFBbEUsU0FBbkQ7SUFDd0g7SUFBckU7SUFBbkQsVUFBd0gsVUFBckUsU0FBbkQ7SUFDMEg7SUFBdEU7SUFBcEQsVUFBMEgsVUFBdEUsVUFBcEQ7O0lBTk87SUFBQTs7Ozs7TUFoQnZCO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBOEM7TUFDMUM7UUFBQTtRQUFBO01BQUE7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQThCO0lBQVM7TUFFdkM7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBbUY7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUEyQztNQUU5SDtRQUFBO1FBQUE7TUFBQTtJQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBaUM7SUFBYTtJQUFDO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBbUI7UUFBQTtRQUFBO01BQUE7TUFBbkI7SUFBQTtnQkFBQTs7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtLQUFBO2dCQUFBO01BQUE7SUFBQTtnQkFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7O01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBQTZEO01BRTVHO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBa0U7SUFDOUQ7SUFBTztNQUNQO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMkI7TUFDdkI7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBSTtRQUFBO1FBQUE7UUFBQTtNQUFBO01BQUo7SUFBQTtNQUFtRDtRQUFBO1FBQUE7TUFBQTtJQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBcUM7SUFBZ0I7TUFDeEc7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBSTtRQUFBO1FBQUE7UUFBQTtNQUFBO01BQUo7SUFBQTtNQUFvRDtRQUFBO1FBQUE7TUFBQTtJQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBc0M7SUFBaUI7SUFDMUc7SUFDRztJQUVSO0lBQUE7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUk7Z0JBQUE7SUFTQztJQUNEOzs7O0lBeEJKO0lBQUosU0FBSSxTQUFKO0lBRUc7SUFBOEI7SUFBakMsU0FBRyxVQUE4QixTQUFqQztJQUVNO0lBQU4sVUFBTSxTQUFOO0lBQWtFO0lBQW5CLFVBQW1CLFVBQW5CO0lBS2tCO0lBQU4sVUFBTSxVQUFOO0lBQ087SUFBTixVQUFNLFVBQU47SUFJcEQ7SUFBSixVQUFJLFVBQUo7OztJQVorRTtJQUFBO0lBRXBDO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsVUFBQSx1RUFBQTs7Ozs7OztJQUxuRDtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBMEJNOzs7O0lBMUJ3QjtJQUE5QixTQUE4QixTQUE5Qjs7Ozs7SUNBQTtnQkFBQTs7O0lBQUE7OzsifQ==
