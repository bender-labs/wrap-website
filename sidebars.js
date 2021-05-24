/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {

    docs: [
        'intro',

        {
            type: 'category',
            label: 'Tutorial-basics',
            items: [

                'tutorial-basics/create-a-blog-post',
                'tutorial-basics/create-a-document',
                'tutorial-basics/create-a-page',
                'tutorial-basics/deploy-your-site',
                'tutorial-basics/congratulations',
            ],
        },
        {
            type: 'category',
            label: 'Tutorial-extras',
            items: [
                'tutorial-extras/manage-docs-versions',
                'tutorial-extras/translate-your-site'
            ],
        },

    ],
    faqs: [
        'wrap-protocol',
        'wrap-tokens',
        'using-wrap-protocol',
        'wrap-protocol-liquidity-pools',
        'other-questions'
    ]


}
