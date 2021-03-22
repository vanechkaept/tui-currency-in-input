import {APP_INITIALIZER, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
    TUI_SANITIZER,
    TuiAutoFocusModule,
    TuiElementModule,
    TuiFilterPipeModule,
    TuiLetModule,
    TuiMapperPipeModule,
    TuiMediaModule,
} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiCalendarModule,
    TuiColorModule,
    TuiDataListModule,
    TuiDialogModule,
    TuiDropdownControllerModule,
    TuiDropdownModule,
    TuiErrorModule,
    TuiExpandModule,
    TuiFormatNumberPipeModule,
    TuiFormatPhonePipeModule,
    TuiGroupModule,
    TuiHintControllerModule,
    TuiHintModule,
    TuiHostedDropdownModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiManualHintModule,
    TuiModeModule,
    TuiNotificationModule,
    TuiNotificationsModule,
    TuiPointerHintModule,
    TuiPrimitiveCheckboxModule,
    TuiPrimitiveTextfieldModule,
    TuiRootModule,
    TuiScrollbarModule,
    TuiSvgModule,
    TuiSvgService,
    TuiTextfieldControllerModule,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {
    TuiAccordionModule,
    TuiActionModule,
    TuiAvatarModule,
    TuiBadgedContentModule,
    TuiBadgeModule,
    TuiBreadcrumbsModule,
    TuiCalendarMonthModule,
    TuiCalendarRangeModule,
    TuiCheckboxBlockModule,
    TuiCheckboxLabeledModule,
    TuiCheckboxModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiDropdownSelectionModule,
    TuiFieldErrorModule,
    TuiFilterModule,
    TuiHighlightModule,
    TuiInputCopyModule,
    TuiInputCountModule,
    TuiInputDateModule,
    TuiInputDateRangeModule,
    TuiInputDateTimeModule,
    TuiInputFileModule,
    TuiInputInlineModule,
    TuiInputModule,
    TuiInputMonthModule,
    TuiInputMonthRangeModule,
    TuiInputNumberModule,
    TuiInputPasswordModule,
    TuiInputPhoneInternationalModule,
    TuiInputPhoneModule,
    TuiInputRangeModule,
    TuiInputSliderModule,
    TuiInputTagModule,
    TuiInputTimeModule,
    TuiIslandModule,
    TuiLazyLoadingModule,
    TuiLineClampModule,
    TuiMarkerIconModule,
    TuiMultiSelectModule,
    TuiPaginationModule,
    TuiPresentModule,
    TuiRadioBlockModule,
    TuiRadioLabeledModule,
    TuiRadioListModule,
    TuiRadioModule,
    TuiSelectModule,
    TuiSliderModule,
    TuiStepperModule,
    TuiTabsModule,
    TuiTagModule,
    TuiTextAreaModule,
    TuiToggleModule,
} from '@taiga-ui/kit';

import * as icons from '@taiga-ui/icons';

import {
    TuiAxesModule,
    TuiBarChartModule,
    TuiLineChartModule,
    TuiLineDaysChartModule,
    TuiPieChartModule,
    TuiRingChartModule,
} from '@taiga-ui/addon-charts';
import {
    TuiCardModule,
    TuiInputCardModule,
    TuiInputCVCModule,
    TuiInputExpireModule,
    TuiMoneyModule,
} from '@taiga-ui/addon-commerce';
import {TuiColorPickerModule} from '@taiga-ui/addon-editor';
import {
    TuiElasticStickyModule,
    TuiMobileCalendarModule,
    TuiMobileDialogModule,
    TuiPullToRefreshModule,
    TuiRippleModule,
    TuiSidebarModule,
    TuiTouchableModule,
} from '@taiga-ui/addon-mobile';
import {
    TuiReorderModule,
    TuiResizableColumnModule,
    TuiTablePaginationModule,
    TuiTableModule,
} from '@taiga-ui/addon-table';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        // Modules for main app.module that should be add once
        TuiRootModule,
        TuiDialogModule,
        TuiNotificationsModule,
        // Modules for your app modules where you use our components
        TuiAccordionModule,
        TuiActionModule,
        TuiAvatarModule,
        TuiBadgeModule,
        TuiBadgedContentModule,
        TuiButtonModule,
        TuiCalendarModule,
        TuiCalendarRangeModule,
        TuiCalendarMonthModule,
        TuiCardModule,
        TuiAxesModule,
        TuiLineChartModule,
        TuiLineDaysChartModule,
        TuiPieChartModule,
        TuiBarChartModule,
        TuiRingChartModule,
        TuiCheckboxModule,
        TuiCheckboxBlockModule,
        TuiCheckboxLabeledModule,
        TuiPrimitiveCheckboxModule,
        TuiColorPickerModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiHostedDropdownModule,
        TuiErrorModule,
        TuiFieldErrorModule,
        TuiExpandModule,
        TuiFilterModule,
        TuiGroupModule,
        TuiMarkerIconModule,
        TuiInputInlineModule,
        TuiInputModule,
        TuiInputDateModule,
        TuiInputCardModule,
        TuiInputCVCModule,
        TuiInputExpireModule,
        TuiInputCopyModule,
        TuiInputCountModule,
        TuiInputDateTimeModule,
        TuiInputFileModule,
        TuiInputMonthModule,
        TuiInputMonthRangeModule,
        TuiInputNumberModule,
        TuiInputPasswordModule,
        TuiInputPhoneModule,
        TuiInputRangeModule,
        TuiInputDateRangeModule,
        TuiInputSliderModule,
        TuiInputTagModule,
        TuiInputTimeModule,
        TuiInputPhoneInternationalModule,
        TuiPrimitiveTextfieldModule,
        TuiTextAreaModule,
        TuiIslandModule,
        TuiLabelModule,
        TuiLineClampModule,
        TuiLinkModule,
        TuiLoaderModule,
        TuiMoneyModule,
        TuiNotificationModule,
        TuiMobileDialogModule,
        TuiMobileCalendarModule,
        TuiPullToRefreshModule,
        TuiRadioModule,
        TuiRadioBlockModule,
        TuiRadioLabeledModule,
        TuiRadioListModule,
        TuiComboBoxModule,
        TuiMultiSelectModule,
        TuiSelectModule,
        TuiScrollbarModule,
        TuiInputRangeModule,
        TuiInputSliderModule,
        TuiSliderModule,
        TuiSvgModule,
        TuiReorderModule,
        TuiResizableColumnModule,
        TuiTablePaginationModule,
        TuiTagModule,
        TuiToggleModule,
        TuiTooltipModule,
        TuiBreadcrumbsModule,
        TuiPaginationModule,
        TuiStepperModule,
        TuiTabsModule,
        TuiAutoFocusModule,
        TuiColorModule,
        TuiDropdownModule,
        TuiDropdownSelectionModule,
        TuiElasticStickyModule,
        TuiElementModule,
        TuiHighlightModule,
        TuiHintModule,
        TuiLazyLoadingModule,
        TuiManualHintModule,
        TuiPointerHintModule,
        TuiLetModule,
        TuiMediaModule,
        TuiModeModule,
        TuiPresentModule,
        TuiRippleModule,
        TuiSidebarModule,
        TuiDropdownControllerModule,
        TuiTouchableModule,
        TuiHintControllerModule,
        TuiTextfieldControllerModule,
        TuiMoneyModule,
        PolymorpheusModule,
        TuiFilterPipeModule,
        TuiFormatNumberPipeModule,
        TuiFormatPhonePipeModule,
        TuiMapperPipeModule,
        TuiTableModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        // A workaround because StackBlitz does not support assets
        {
            provide: APP_INITIALIZER,
            multi: true,
            deps: [TuiSvgService],
            useFactory: iconsWorkaround,
        },
        /**
         * If you use unsafe icons or have kind of WYSISYG editor in your app
         *
         * Take a look at: https://github.com/TinkoffCreditSystems/ng-dompurify
         *
         * This library implements DOMPurify as Angular Sanitizer or Pipe.
         * It delegates sanitizing to DOMPurify and supports the same configuration.
         */
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
    ],
})
export class AppModule {}

// A workaround because StackBlitz does not support assets
export function iconsWorkaround(service: TuiSvgService): Function {
    return () => service.define({...icons, tuiCoreIcons: '', tuiKitIcons: ''});
}