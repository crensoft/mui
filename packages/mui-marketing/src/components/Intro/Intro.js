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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var mui_core_1 = require("@crensoft/mui-core");
var core_1 = require("@material-ui/core");
var useStyles = mui_core_1.createStyles(function (theme) { return ({
    Intro: function (_a) {
        var align = _a.align, inline = _a.inline, center = _a.center;
        return ({
            textAlign: align,
            flexDirection: inline ? 'row' : 'column',
            justifyContent: center ? 'center' : 'flex-start',
            display: 'flex',
        });
    },
    IntroDivider: function (_a) {
        var dividerColor = _a.dividerColor, center = _a.center;
        return ({
            maxWidth: 120,
            margin: center ? 'auto' : 0,
            backgroundColor: theme.palette.getColor(dividerColor) || theme.palette.getColor('neutral', 'dark'),
        });
    },
}); });
function Intro(_a) {
    var title = _a.title, body = _a.body, label = _a.label, invertLabel = _a.invertLabel, caption = _a.caption, icon = _a.icon, circleIcon = _a.circleIcon, _b = _a.iconSize, iconSize = _b === void 0 ? '3x' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'primary' : _c, iconBgColor = _a.iconBgColor, titleColor = _a.titleColor, _d = _a.main, main = _d === void 0 ? false : _d, _e = _a.center, center = _e === void 0 ? false : _e, divider = _a.divider, dividerColor = _a.dividerColor, children = _a.children, inline = _a.inline, h1 = _a.h1;
    var align = center ? 'center' : 'left';
    var calcDividerColor;
    // allow color to be set from value of another prop
    switch (dividerColor) {
        case 'iconColor':
            calcDividerColor = iconColor;
            break;
        case 'titleColor':
            calcDividerColor = titleColor;
            break;
        case 'iconBgColor':
            calcDividerColor = iconBgColor;
            break;
        default:
            calcDividerColor = dividerColor;
    }
    var classes = useStyles({ align: align, center: center, inline: inline, dividerColor: calcDividerColor });
    if (!title && !body) {
        throw new Error('Intro title and body cannot both be empty');
    }
    var renderTitle = function () {
        var titleTag = main ? 'h2' : 'h3';
        if (h1) {
            titleTag = 'h1';
        }
        var calcTitleColor;
        // xxx: should omit self
        switch (titleColor) {
            case 'iconColor':
                calcTitleColor = iconColor;
                break;
            case 'titleColor':
                calcTitleColor = titleColor;
                break;
            case 'iconBgColor':
                calcTitleColor = iconBgColor;
                break;
            default:
                calcTitleColor = titleColor;
        }
        return mui_core_1.renderText({ color: calcTitleColor, key: 'title', align: align, variant: titleTag }, title);
    };
    var renderLabel = function () { return mui_core_1.renderText({ key: 'label', align: align, variant: 'subtitle1' }, label); };
    // invert label / title order
    var headings = [renderLabel(), renderTitle()];
    if (invertLabel) {
        headings.reverse();
    }
    var renderBody = function () {
        var bodyVariant = main ? 'body1' : 'body2';
        var maxWidth = 'sm';
        if (h1) {
            maxWidth = 'xs';
            bodyVariant = 'body1';
        }
        var ele = mui_core_1.renderText({ key: 'body', align: align, variant: bodyVariant }, body);
        return (ele && (react_1.default.createElement(mui_core_1.Container, { center: center, maxWidth: maxWidth, key: "body-container" }, ele)));
    };
    var renderIcon = function () {
        if (!icon)
            return;
        if (icon.alt && icon.img) {
            return react_1.default.createElement(core_1.Avatar, { alt: icon.alt, src: icon.img });
        }
        var iconProps = {
            icon: icon,
            size: iconSize,
            label: 'icon',
            color: iconColor,
            bgColor: iconBgColor,
        };
        if (circleIcon) {
            return react_1.default.createElement(mui_core_1.CircleIcon, __assign({ bgColor: iconBgColor }, iconProps));
        }
        return react_1.default.createElement(mui_core_1.Icon, __assign({}, iconProps));
    };
    var renderSpacer = function (shouldRender, key, val) {
        if (val === void 0) { val = 1; }
        return !!shouldRender && react_1.default.createElement(mui_core_1.Spacer, { key: key, val: val });
    };
    var renderDivider = function () {
        if (!divider)
            return;
        return react_1.default.createElement(core_1.Divider, { key: "divider", className: classes.IntroDivider, variant: "middle" });
    };
    if (divider && divider !== 'footer') {
        headings.push(renderSpacer(true, 's1'));
        headings.push(renderDivider());
    }
    return (react_1.default.createElement("div", { className: classes.Intro },
        icon && react_1.default.createElement("div", null, renderIcon()),
        renderSpacer(icon, 's2'),
        react_1.default.createElement("div", null,
            headings,
            renderSpacer(body, 's3', h1 ? 1.2 : 1),
            renderBody(),
            children)));
}
exports.default = Intro;
//# sourceMappingURL=Intro.js.map