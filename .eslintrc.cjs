module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended', // eslint核心规则
    'plugin:vue/vue3-essential', // 继承eslint-plugin-vue组件中的基础配置
    'plugin:prettier/recommended', // 继承eslint-plugin-prettier组件中的基础配置
    'eslint-config-prettier' // 处理配置兼容问题
  ],
  // 配置解析vue文件
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest', // 指定EcmaScript的版本
    sourceType: 'module', // script/module
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'vue', // eslint-plugin-vue缩写
    'prettier' // eslint-plugin-prettier缩写
  ],
  globals: {
    // 添加全局变量，防止no-undef 规则发出警告
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          'extends',
          'methods',
          'inheritAttrs',
          'model',
          'data',
          ['props', 'propsData'],
          'computed',
          'watch',
          ['components', 'directives', 'filters'],
          'mixins',
          'LIFECYCLE_HOOKS',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    'vue/multi-word-component-names': 'off'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
