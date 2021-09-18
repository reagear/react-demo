module.exports = {
    extends: ['stylelint-config-standard','stylelint-config-recess-order','stylelint-config-css-modules'],
    rules: {
        indentation: null,
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['composes']
            }
        ],
        'selector-pseudo-class-no-unknown': null,
        'selector-list-comma-newline-after': null,
        'unit-no-unknown': [
            true,
            {
                ignoreUnits: ['rpx']
            }
        ],
        'declaration-empty-line-before': null,
        'rule-empty-line-before': null
    }
};
