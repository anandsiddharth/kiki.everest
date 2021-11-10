
export const load = () => {
    const path = process.env.__coupons_data_path || '../../../data/coupons.json'

    return require(path);
}