// 6.6.3 定义正式集合操作

// 扩展Set
// 可以子类化Set, 或定义一个使用函数库
// 要把两种方式合二为一, 可以在子类上实现静态方法, 然后再实例方法中调用这些静态方法

// 需要注意的几个点
// 1. 某些Set操作是有关联性的, 因此最好让实现的方法能支持处理任意多个集合实例
// 2. Set保留插入顺序, 所有方法返回的集合必须保证顺序
// 3. 尽可能高效的使用内存,扩展操作符的语法很简洁, 但尽可能避免集合和数组间的相关转换能够节省对象初始化成本
// 4. 不要修改已有的集合实例

class XSet extends Set {
    
    union(...sets) {
        return XSet.union(this, ...sets);
    }

    // 返回多个结合的并集
    static union(a, ...bSets) {
        const unionSet = new XSet(a);
        for(const b of bSets) {
            for(const bValue of b) {
                unionSet.add(bValue);
            }
        }
        return unionSet;
    }

    intersection(...sets) {
        return XSet.intersection(this, ...sets);
    }

    // 返回多个集合的交集
    static intersection(a, ...bSets) {
        const intersectionSet = new XSet(a);
        for(const aValue of intersectionSet) {
            for(const b of bSets) {
                if(!b.has(aValue)) {
                    intersectionSet.delete(aValue);
                }
            }
        }
        return intersectionSet;
    }

    difference(set) {
        return XSet.difference(this, set);
    }

    // 返回两个集合的差集
    static difference(a, b) {
        const differenceSet = new XSet(a);
        for(const bValue of b) {
            if(differenceSet.has(bValue)) {
                differenceSet.delete(bValue);
            }
        }
        return differenceSet;
    }

    symmetricDifference(set) {
        return XSet.symmetricDifference(this, set);
    }

    // 返回两个集合的对称差集
    static symmetricDifference(a, b) {
        return a.union(b).difference(a.intersection(b));
    }

    cartesianProduct(set) {
        return XSet.cartesianProduct(this, set);
    }

    // 返回两个集合(数组对形式)的笛卡尔积
    // 必须返回数组集合, 因为笛卡尔积可能包含相同值的对
    static cartesianProduct(a, b) {
        const cartesianProductSet = new XSet();
        for(const aValue of a) {
            for(const bValue of b) {
                cartesianProductSet.add([aValue, bValue]);
            }
        }
        return cartesianProductSet;
    }

    powerSet() {
        return XSet.powerSet(this);
    }

    // 返回一个集合的幂集
    static powerSet(a) {
        const powerSet = new XSet().add(new XSet());
        for(const aValue of a) {
            for(const set of new XSet(powerSet)) {
                powerSet.add(new XSet(set).add(aValue));
            }
        }
        return powerSet;
    }

}
