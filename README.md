# ea-lgpd
Cookies consent bar for LGPD

Created for Empório Adamantis <emporioadamantis.com.br>

## Usage:

```
<script type="text/javascript">
  var _eaQuery = _eaQuery || [];
  _eaQuery.push(['_urlDominio', 'emporioadamantis.com.br']);
  _eaQuery.push(['_emailContato', 'agencia@emporioadamantis.com.br']);
  _eaQuery.push(['_corBarra', 'rgba(0,0,0,0.2)']);
  _eaQuery.push(['_corTexto', 'black']);

  (function() {
    var ea = document.createElement('script'); ea.type = 'text/javascript'; ea.async = true;
    ea.src = 'https://cdn.jsdelivr.net/gh/dimaspante/ea-lgpd@master/privacy/ea.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ea, s);
  })();
</script>
```
