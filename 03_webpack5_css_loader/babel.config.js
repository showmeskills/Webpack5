module.exports = {
    "presets": [
        ["@babel/preset-env", {
            "useBuiltIns": "usage",
            "modules": false,
            "corejs": "3.0.0",
            "shippedProposals": true,
            "targets": {
                "browsers": "last 2 versions, not ie <= 9"
            }
        }]
    ],
    "plugins": [
        ["@babel/plugin-transform-runtime", {
            "helpers": false
        }],
        "@babel/plugin-proposal-class-static-block",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-flow-strip-types",
        "lodash"
    ]
}