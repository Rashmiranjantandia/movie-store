import _ from 'lodash';
export function Paginate(items, pageNumber, pageSize) {
    // console.log(pageNumber);
    const startIndex = (pageNumber - 1) * pageSize;
    // console.log((items).slice(startIndex));
    return _(items).slice(startIndex).take(pageSize).value();
}