"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var mui_core_1 = require("@crensoft/mui-core");
var renderMap_1 = __importDefault(require("@crensoft/mui-utils/lib/renderMap"));
var PainPoint_1 = __importDefault(require("../PainPoint/PainPoint"));
var ramda_1 = require("ramda");
var core_1 = require("@material-ui/core");
var useStyles = mui_core_1.createStyles(function (theme) { return ({
    FeaturedList: function () { return ({
        textAlign: 'left',
    }); },
    FeaturedListRow: function (_a) {
        var _b = _a.spacing, spacing = _b === void 0 ? 5 : _b;
        return ({
            '& + &': {
                marginTop: theme.spacing(spacing),
            },
        });
    },
    FeaturedListItem: function (_a) {
        var centerItems = _a.centerItems;
        return {
            display: 'flex',
        };
    },
}); });
var validateProps = function (_a) {
    var fullWidth = _a.fullWidth, large = _a.large;
    if (fullWidth && large) {
        throw new Error('fullWidth and large props both set.');
    }
};
function createRows(perRow, items) {
    return perRow > 1 ? ramda_1.splitEvery(perRow, items) : [items];
}
function FeaturedList(_a) {
    var fullWidth = _a.fullWidth, center = _a.center, cards = _a.cards, intro = _a.intro, large = _a.large, features = _a.features;
    validateProps({ fullWidth: fullWidth, large: large });
    var spacing = 3;
    var classes = useStyles({ spacing: spacing });
    var getKey = function (item) { return item.title || item.body; };
    var colSm = 4;
    if (large) {
        colSm = 6;
    }
    else if (fullWidth) {
        colSm = 12;
    }
    var renderFeatures = renderMap_1.default(function (_a) {
        var actions = _a.actions, feature = __rest(_a, ["actions"]);
        var content = react_1.default.createElement(PainPoint_1.default, __assign({ center: center }, intro, feature, { actions: actions }));
        if (cards) {
            content = (react_1.default.createElement(core_1.Card, { key: "card", style: { width: '100%' } },
                react_1.default.createElement(core_1.CardContent, null, content)));
        }
        return (react_1.default.createElement(mui_core_1.Col, { className: classes.FeaturedListItem, key: getKey(feature), xs: 12, sm: colSm }, content));
    });
    var renderRows = renderMap_1.default(function (row) { return (react_1.default.createElement(mui_core_1.Row, { key: getKey(row[0]), className: classes.FeaturedListRow, spacing: spacing }, renderFeatures(row))); });
    var rows = createRows(12 / colSm, features);
    return react_1.default.createElement("div", { className: classes.FeaturedList }, renderRows(rows));
}
exports.default = FeaturedList;
//# sourceMappingURL=FeaturedList.js.map