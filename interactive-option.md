## Option #1: Interactive Universal Navigation

```
<div id="nygov-universal-navigation" data-iframe="true">
    <noscript>
        <iframe width="100%" height="86px" src="//nygovstg.prod.acquia-sites.com/load_global_menu/ajax?iframe=true" frameborder="0" style="border:none; overflow:hidden; width:100%; height:86px;" scrolling="no">
        </iframe>
    </noscript>
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>
    <script type="text/javascript">
        var NY = {
            HOST : "nygovstg.prod.acquia-sites.com"
        };
        (function(document, require, style, head) {


            head =  document.getElementsByTagName('head')[0];

            require = document.createElement('script');
            require.type = 'text/javascript';
            require.async = true;
            require.setAttribute('data-main',"//nygovstg.prod.acquia-sites.com/sites/all/widgets/universal-navigation/js/main");
            require.src = "//nygovstg.prod.acquia-sites.com/sites/all/widgets/universal-navigation/js/require.js";

            var styles = [
                '/sites/all/themes/ny_gov/css/ny-gov.normalize.css',
                '/sites/all/themes/ny_gov/css/layouts/global-menu/global-menu.layout.css'
            ];

            for (var i = 0; i < styles.length; i++){
                style = document.createElement('link');
                style.rel = 'stylesheet';
                style.type = 'text/css';
                style.href = "//nygovstg.prod.acquia-sites.com" + styles[i];
                head.appendChild(style);
            }

            head.appendChild(require);

        }(document));
    </script>
</div>
```


