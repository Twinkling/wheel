import { Vue, Mixins, Component } from 'vue-property-decorator';
import { hyphenate } from '@/utils';

const ELEMENT = '__';
const MODS = '--';

interface IMods {[k: string]: boolean }

const join = (name: string, el: string, symbol: string) => (el ? name + symbol + el : name);

function prefix(name: string, mods: IMods | IMods[] | string): any {
    if (typeof mods === 'string') {
        return join(name, mods, MODS);
    }

    if (Array.isArray(mods)) {
        return mods.map(item => prefix(name, item));
    }

    const ret: IMods = {};
    for (const key in mods) {
    // if (mods.hasOwnProperty(key)) {
        if (Object.prototype.hasOwnProperty.call(mods, key)) {
            if (key) ret[name + MODS + key] = mods[key];
        }
    }
    return ret;
}

@Component
class Base extends Vue {
    public bem(el: string | IMods = '', mods?: IMods) {
        const { name } = this.$options;
        const temp = hyphenate(name as string);

        if (el && typeof el !== 'string') {
            mods = el;
            el = '';
        }
        el = join(temp, el as string, ELEMENT);

        return mods ? [el, prefix(el, mods)] : el;
    }
}

export const BaseComponet = Mixins(Base);
export * from 'vue-property-decorator';
