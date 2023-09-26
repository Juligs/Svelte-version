module.exports = `
        <!-- Start GPT Tag -->
        <script>
        window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
                var mapping_m = googletag.sizeMapping()
                                        .addSize([768, 0], [[1, 1], [990, 90], [980, 90], [990, 250], [980, 250], [728, 90]])
                                        .addSize([0, 0], [[1, 1], [320, 100], [320, 50], [320, 53]])
                                        .build();
                googletag.defineSlot('/99071977/mun/especiales/generico', [[1,1],[990,90],[990,250],[980,90],[980,250],[728,90],[320,100],[320,50],[320,53]], 'div-gpt-ad-mun_especiales_generico_m')
                        .setTargeting('p', ['m'])
                        .defineSizeMapping(mapping_m)
                        .addService(googletag.pubads());

                googletag.defineSlot('/99071977/mun/especiales/generico', [[1,1],[990,90],[990,250],[980,90],[980,250],[728,90],[320,100],[320,53],[320,50]], 'div-gpt-ad-mun_especiales_generico_mb')
                        .setTargeting('p', ['mb'])
                        .defineSizeMapping(mapping_m)
                        .addService(googletag.pubads());

                googletag.defineSlot('/99071977/mun/especiales/generico', [[1,1],[990,90],[990,250],[980,90],[980,250],[728,90],[320,100],[320,53],[320,50]], 'div-gpt-ad-mun_especiales_generico_mc')
                        .setTargeting('p', ['mc'])
                        .defineSizeMapping(mapping_m)
                        .addService(googletag.pubads());
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
        });
        </script>
        <!-- End GPT Tag -->
`