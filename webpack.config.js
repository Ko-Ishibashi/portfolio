// �J��or�{�ԃ��[�h�̑I��(development�Aproduction�Anone�̂����ꂩ�ݒ�K�{)
// development: �J�����̃t�@�C���o�͂̃��[�h(�œK����莞�ԒZ�k,�G���[�\���Ȃǂ�D��)
// production: �{�Ԏ��̃t�@�C���o�͂̃��[�h(�œK������ďo�͂����)
const MODE = "development";
// �\�[�X�}�b�v�̗��p�L��(production�̂Ƃ��̓\�[�X�}�b�v�𗘗p���Ȃ�)
const enabledSourceMap = MODE === "development";

// �t�@�C���o�͎��̐�΃p�X�w��Ɏg�p
const path = require('path');

// �v���O�C��
// js�œK��
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  // �G���g���[�|�C���g(���C����js�t�@�C��)
  entry: './src/js/app.js',
  // �t�@�C���̏o�͐ݒ�
  output: {
    // �o�͐�(��΃p�X�ł̎w��K�{)
    path: path.resolve(__dirname, 'dist/js'),
    // �o�̓t�@�C����
    filename: "bundle.js"
  },
  mode: MODE,
  // �\�[�X�}�b�v�L��
  devtool: 'source-map',
  // ���[�_�[�̐ݒ�
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        // ���[�_�[�̑Ώ� // �g���q .js �̏ꍇ
        test: /\.js$/,
        // ���[�_�[�̏����Ώۂ���O���f�B���N�g��
        exclude: /node_modules/,
        // Babel �𗘗p����
        loader: "babel-loader",
        // Babel �̃I�v�V�������w�肷��
        options: {
          presets: [
            // �v���Z�b�g���w�肷�邱�ƂŁAES2019 �� ES5 �ɕϊ�
            "@babel/preset-env"
          ]
        }
      }
    ]
  },
  // import ���� .ts �t�@�C�����������邽��
  resolve: {
    // Webpack�ŗ��p����Ƃ��̐ݒ�
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  plugins: [
    // Vue��ǂݍ��߂�悤�ɂ��邽��
    new VueLoaderPlugin()
  ],
  // mode:puroduction�Ńr���h�����ꍇ�̃t�@�C�����k
  optimization: {
    minimizer: production
      ? []
      : [
        // js�t�@�C���̍œK��
        new TerserPlugin({
          // ���ׂẴR�����g�폜
          extractComments: 'all',
          // console.log�̏o�͏���
          terserOptions: {
            compress: { drop_console: true }
          },
        }),
      ]
  },
  // js, css, html�X�V�������I�Ƀu���E�U�������[�h
  devServer: {
    // �T�[�o�[�̋N�_�f�B���N�g��
    // contentBase: "dist",
    // �o���h�������t�@�C���̊Ď� // �p�X���T�[�o�[�N�_�ƈقȂ�ꍇ�ɐݒ�
    publicPath: '/dist/js/',
    //�R���e���c�̕ύX�Ď�������
    watchContentBase: true,
    // ���s��(�T�[�o�[�N����)�u���E�U�����N��
    open: true,
    // �����Ŏw�肵���y�[�W���J��
    openPage: "index.html",
    //�@����network������̃A�N�Z�X�\��
    host: "0.0.0.0",
    historyApiFallback: true,
  }
};