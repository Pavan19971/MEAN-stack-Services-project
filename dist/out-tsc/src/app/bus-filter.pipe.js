var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var BusFilterPipe = /** @class */ (function () {
    function BusFilterPipe() {
    }
    BusFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) {
            return _this.applyFilter(item, filter);
        });
    };
    BusFilterPipe.prototype.applyFilter = function (bus, filter) {
        for (var bustype in filter) {
            if (filter[bustype]) {
                if (typeof filter[bustype] === 'string') {
                    if (bus[bustype].toLowerCase()
                        .indexOf(filter[bustype]
                        .toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[bustype] === 'number') {
                    if (bus[bustype] !== filter[bustype]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    BusFilterPipe = __decorate([
        Pipe({
            name: 'busFilter'
        })
    ], BusFilterPipe);
    return BusFilterPipe;
}());
export { BusFilterPipe };
//# sourceMappingURL=bus-filter.pipe.js.map