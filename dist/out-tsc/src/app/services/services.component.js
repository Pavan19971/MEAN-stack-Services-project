var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Bus } from '/home/pavan/Desktop/Pavan/apstrtcAngular/src/app/Bus';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(data) {
        this.data = data;
        this.bustype = "A/C CLASS";
        this.BusTypes = [];
        this.filter = new Bus();
        this.BoardingPoints = [];
        this.DroppingPoints = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.minValue = 1000;
        this.maxValue = 2000;
        this.options = {
            floor: 0,
            ceil: 2000,
            step: 1
        };
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getBuses().subscribe((function (data) { return _this.buses$ = data; }));
        this.BusTypes = [
            { item_id: 1, item_text: 'NON A/C CLASS' },
            { item_id: 2, item_text: 'A/C CLASS' }
        ];
        this.selectedItems = [
            { item_id: 1, item_text: 'NON A/C CLASS' },
            { item_id: 2, item_text: 'A/C CLASS' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            itemsShowLimit: 1,
            allowSearchFilter: false
        };
        this.BoardingPoints = [
            { item_id: 1, item_text: 'AMEERPET' },
            { item_id: 2, item_text: 'ABIDS' },
            { item_id: 3, item_text: 'ANANDBAGH' },
            { item_id: 4, item_text: 'LB NAGAR' }
        ];
        this.DroppingPoints = [
            { item_id: 1, item_text: 'VIJAYAWADA' },
            { item_id: 2, item_text: 'BENZ CIRCLE' },
            { item_id: 3, item_text: 'AUTO NAGAR' },
            { item_id: 4, item_text: 'PORANKI' }
        ];
    };
    ServicesComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    ServicesComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    ServicesComponent = __decorate([
        Component({
            selector: 'app-services',
            templateUrl: './services.component.html',
            styleUrls: ['./services.component.css'],
            // Add this:
            animations: [
                trigger('listStagger', [
                    transition('* <=> *', [
                        query(':enter', [
                            style({ opacity: 0, transform: 'translateY(-15px)' }),
                            stagger('50ms', animate('550ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' })))
                        ], { optional: true }),
                        query(':leave', animate('50ms', style({ opacity: 0 })), {
                            optional: true
                        })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [DataService])
    ], ServicesComponent);
    return ServicesComponent;
}());
export { ServicesComponent };
//# sourceMappingURL=services.component.js.map