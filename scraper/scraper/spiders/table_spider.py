import scrapy


class TableSpiderSpider(scrapy.Spider):
    name = "table_spider"
    allowed_domains = ["example.com"]
    start_urls = ["https://example.com"]

    def parse(self, response):
        pass
