var conf = 'XT Summit 2017';
var reaction = '';
if (conf == 'XT Summit 2017') {
    (reaction = 'WOW!')
} else {
    (reaction = '^')
}
var attend = function (conf, learn) {
    var intense = '';
    for (var i = 0; i <= learn; i = i + 1) {
        if (conf == 'XT Summit 2017') {
            (reaction = 'WOW!')
        }
        (intense = intense + '!')
    }
    return conf + intense;
};
var result;
for (var i = 0; i <= 10; i = i + 1) {
    (result = (attend(conf, i)))
}
(alert(result))
(console.log('I am Back'))

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tc2hlazEvRGVza3RvcC9raWxpa2tpL2tpbGlra2kvZG9jcy9zcGVsbHMvMi5rbCJdLCJuYW1lcyI6WyJjb25mIiwicmVhY3Rpb24iLCJhdHRlbmQiLCJsZWFybiIsImludGVuc2UiLCJpIiwicmVzdWx0IiwiYWxlcnQiLCJjb25zb2xlLmxvZyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQUEsSUFBQSxHQUFZLGdCQUFaLEM7QUFDQSxJQUFBQyxRQUFBLEdBQWdCLEVBQWhCLEM7QUFHQSxJQUZJRCxJQUFKLElBQWdCLGdCQUVoQixFQUZnQztBQUFBLElBQzVCLENBQUFDLFFBQUEsR0FBZ0IsTUFBaEIsQ0FENEI7QUFBQSxDQUVoQyxNQUFJO0FBQUEsSUFDQSxDQUFBQSxRQUFBLEdBQWdCLEdBQWhCLENBREE7QUFBQSxDO0FBR0osSUFBQUMsTUFBQSxhQUFZRixJQUFaLEVBQXNCRyxLQUF0QixFQUFnQztBQUFBLElBQzVCLElBQUFDLE9BQUEsR0FBZSxFQUFmLENBRDRCO0FBQUEsSUFFNUIsS0FBTSxJQUFBQyxDQUFBLEdBQVMsQ0FBVCxDQUFOLENBQU1BLENBQUEsSUFBY0YsS0FBcEIsRUFBTUUsQ0FBYyxHQUFkQSxDLElBQU4sRUFBNkI7QUFBQSxRQUN6QixJQUFJTCxJQUFKLElBQWdCLGdCQUFoQixFQUFnQztBQUFBLFlBQzVCLENBQUFDLFFBQUEsR0FBZ0IsTUFBaEIsQ0FENEI7QUFBQSxTQURQO0FBQUEsUUFJekIsQ0FBQUcsT0FBQSxHQUFlQSxPQUFBLEdBQWMsR0FBN0IsQ0FKeUI7QUFBQSxLQUZEO0FBQUEsSUFRNUIsT0FBR0osSUFBQSxHQUFXSSxPQUFkLENBUjRCO0FBQUEsQ0FBaEMsQztBQVVBLElBQUFFLE1BQUEsQztBQUNBLEtBQU0sSUFBQUQsQ0FBQSxHQUFTLENBQVQsQ0FBTixDQUFNQSxDQUFBLElBQWMsRUFBcEIsRUFBTUEsQ0FBYyxHQUFkQSxDLElBQU4sRUFBc0I7QUFBQSxJQUNsQixDQUFBQyxNQUFBLEdBQWMsQ0FBQUosTUFBQSxDQUFlRixJQUFmLEVBQXlCSyxDQUF6QixFQUFkLENBRGtCO0FBQUEsQztBQUd0QixDQUFBRSxLQUFBLENBQWFELE1BQWIsRTtBQUNBLENBQUFFLFdBQUEsQ0FBZSxXQUFmIiwic291cmNlc0NvbnRlbnQiOlsia2lsbENvbmYgPH4gJ1hUIFN1bW1pdCAyMDE3J1xua2lsbFJlYWN0aW9uIDx+ICcnXG5vaWsga2lsbENvbmYgPT0gJ1hUIFN1bW1pdCAyMDE3J1xuICAgIGtpbGxSZWFjdGlvbiA8fiAnV09XISdcbmJob29cbiAgICBraWxsUmVhY3Rpb24gPH4gJ14nXG5cbmtpbGxBdHRlbmQgW2tpbGxDb25mLCBraWxsTGVhcm5dXG4gICAga2lsbEludGVuc2UgPH4gJydcbiAgICBkYW1iYSBraWxsSSA8fiAwIH4+IGtpbGxMZWFyblxuICAgICAgICBvaWsga2lsbENvbmYgPT0gJ1hUIFN1bW1pdCAyMDE3J1xuICAgICAgICAgICAga2lsbFJlYWN0aW9uIDx+ICdXT1chJ1xuXG4gICAgICAgIGtpbGxJbnRlbnNlIDx+IGtpbGxJbnRlbnNlICsgJyEnXG5cbiAgICA8fiBraWxsQ29uZiArIGtpbGxJbnRlbnNlXG5cbmtpbGxSZXN1bHRcbmRhbWJhIGtpbGxJIDx+IDAgfj4gMTBcbiAgICBraWxsUmVzdWx0IDx+IGtpbGxBdHRlbmQgPH4gW2tpbGxDb25mLCBraWxsSV1cblxua2lsbENhc3QgPH4gW2tpbGxSZXN1bHRdXG5raWxsRGFycmZ1IDx+IFsnSSBhbSBCYWNrJ11cblxuIl19