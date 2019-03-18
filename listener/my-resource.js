module.exports = MockBase => class MyResource extends MockBase {
  mocks () {
    return {
      route: '/api/my-resource',
      responses: [
        {
		  request: { method: 'POST' },
          response: {
            type: 'json',
            body: { name: 'Name1' },
          }
        }
      ]
    }
  }
}