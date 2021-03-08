(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.bubbleSort basic unit test', function () {
      var list = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
      nx.bubbleSort(list);
      expect(list).toEqual([2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]);
    });
  });
})();
