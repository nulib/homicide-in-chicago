> Note: This repo does not contain the full `/database` of the website. It only has a sample of the data. The full database was used only once --due to its size-- to build the production website several years ago. Therefore, it is our practice **not** to change any info in the `/database`. If there is a need to fix a typo on another section of the site, for example, you can use this project to build the site locally, replace the pre-built HTML in the s3 bucket, then create a cache invalidation in CloudFront (if applicable) to refresh the site. 

> Full .csv file of database is in ARCH https://doi.org/10.21985/N2HB3R. json-parser.py in `/data` generates json file from csv. .py file needs to be removed temporarily in order to regenerate site with Hugo.


## Required
[Hugo](https://gohugo.io/) v0.52

## To test it out
`$ git clone https://github.com/nulib/homicide-in-chicago.git`

`$ cd homicide-in-chicago`

`$ hugo` to build the search index (/index.json)

`$ hugo serve` to start a development server

Visit http://localhost:1313

## Credits
- [Bulma for Hugo](https://themes.gohugo.io/bulma/)
- [Client side searching for Hugo.io with Fuse.js](https://gist.github.com/eddiewebb/735feb48f50f0ddd65ae5606a1cb41ae#layoutspagesearchhtml)
- [Font Awesome v4.7](https://fontawesome.com/v4.7.0/)
- [jsOnlyLightbox](https://github.com/felixhagspiel/jsOnlyLightbox)
