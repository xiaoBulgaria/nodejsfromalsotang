��������ʽ��

Ŀ��

var web_development = "python php ruby javascript jsonp perhapsphpisoutdated";
�ҳ����� ���� p �������� ph �����е��ʣ���

[ 'python', 'javascript', 'jsonp' ]

֪ʶ��

������ʽ��ʹ��
js �е�������ʽ�� pcre(http://en.wikipedia.org/wiki/Perl_Compatible_Regular_Expressions ) ������
�γ�����

��ʼ���ſ�֮ǰ�������ȥ����ƪ���¡�

��������ʽ30�������Ž̡̳���http://deerchao.net/tutorials/regex/regex.htm

������ƪ������������ʽ�Ļ���֪ʶ�����Ƕ���������û��չ�������������Կ�������ƪ��

��������ʽ֮�������Բ������ѡ�����http://fxck.it/post/50558232873

���ˡ�

�ںܾúܾ���ǰ����һ������һ�����ַ���������������ߣ��� perl��

������ perl����һ������������ʽ�ı�׼��ʵ���˳������� pcre��Perl Compatible Regular Expressions��

���ź����ǣ�js ����������� pcre ���Ǽ��ݵġ��ܶ����Զ�������

�����Ҫ�������Լ�д��������ʽ�����������http://refiddle.com/ ���������������õص��ԡ�

������������Ҫ���� js ����Ҫע��ĵط�������������ʽ�����ݣ���������ƪ�����㹻ѧϰ�ˡ�

��һ��

js �У��������������ԣ�ֻ֧�� ������Ԥ�����ж��� �� ���ȸ�Ԥ�����ж��� �����֡�

�ڶ���

js �У�������ʽ������Ը����� flag������ /something/igm��

���ǵ�����ֱ��ǣ�

i �������ǲ����ִ�Сд
g �������ǣ�ƥ����
m �������ǣ��� ^ �� $ ����ƥ��ÿһ�еĿ�ͷ��
�ֱ�ٸ����ӣ�

/a/.test('A') // => false
/a/i.test('A') // => true

'hello hell hoo'.match(/h.*?\b/) // => [ 'hello', index: 0, input: 'hello hell hoo' ]
'hello hell hoo'.match(/h.*?\b/g) // => [ 'hello', 'hell', 'hoo' ]

'aaa\nbbb\nccc'.match(/^[\s\S]*?$/g) // => [ 'aaa\nbbb\nccc' ]
'aaa\nbbb\nccc'.match(/^[\s\S]*?$/gm) // => [ 'aaa', 'bbb', 'ccc' ]
�� m ������صģ����� \A, \Z �� \z

���ǵ�����ֱ��ǣ�

\A  �ַ�����ͷ(����^�������ܴ������ѡ���Ӱ��)
\Z  �ַ�����β����β(���ܴ������ѡ���Ӱ��)
\z  �ַ�����β(����$�������ܴ������ѡ���Ӱ��)
�� js �У�g flag ��Ӱ�� String.prototype.match() �� RegExp.prototype.exec() ����Ϊ

String.prototype.match() �У��������ݵĸ�ʽ�᲻һ������ g �᷵�����飬���� g �򷵻رȽ���ϸ����Ϣ

> 'hello hell'.match(/h(.*?)\b/g)
[ 'hello', 'hell' ]

> 'hello hell'.match(/h(.*?)\b/)
[ 'hello',
  'ello',
  index: 0,
  input: 'hello hell' ]
RegExp.prototype.exec() �У��� g ֮�������������������������򣬶��Ǵ洢�ڱ����еĻ�����ô����������ͻ����м��䣡��

> /h(.*?)\b/g.exec('hello hell')
[ 'hello',
  'ello',
  index: 0,
  input: 'hello hell' ]
> /h(.*?)\b/g.exec('hello hell')
[ 'hello',
  'ello',
  index: 0,
  input: 'hello hell' ]


> var re = /h(.*?)\b/g;
undefined
> re.exec('hello hell')
[ 'hello',
  'ello',
  index: 0,
  input: 'hello hell' ]
> re.exec('hello hell')
[ 'hell',
  'ell',
  index: 6,
  input: 'hello hell' ]
>
������

���֪����. �ǲ�����ƥ�� \n �ġ����������ƥ��������漰���˿��У��������������ġ�

var multiline = require('multiline');

var text = multiline.stripIndent(function () {
/*
    head
    ```
    code code2 .code3```
    ```
    foot
*/
});
�������������� ``` �а���������ȡ������Ӧ����ô�죿

ֱ���� . ƥ�䲻�� \n������������Ҫ�ҵ�һ��ԭ�ӣ���ƥ����� \n ���ڵ������ַ���

���ԭ�ӵĹ���д������ [\s\S]

var match1 = text.match(/^```[\s\S]+?^```/gm);
console.log(match1) // => [ '```\ncode code2 code3```\n```' ]

// ������һ�ֺ�ɧ��д����[^] �� [\s\S] �ȼ�
var match2 = text.match(/^```[^]+?^```/gm)
console.log(match2) // => [ '```\ncode code2 .code3```\n```' ]
�ꡣ