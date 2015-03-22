// Generated by CoffeeScript 1.6.3
var Image;

module.exports = Image = (function() {
  function Image(alt, url, opt) {
    this.alt = alt;
    this.url = url;
    this.opt = opt;
    this.localPath = "";
    this.skipped = false;
  }

  Image.prototype.download = function(downloader, callback) {
    var _this = this;
    return downloader.download(this, function(err, succ) {
      _this.localPath = succ;
      return typeof callback === "function" ? callback(err, succ) : void 0;
    });
  };

  return Image;

})();
