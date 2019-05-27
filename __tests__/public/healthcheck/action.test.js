import sinon from 'sinon';
import {
  expect,
} from 'chai';

import statusServer from "../../../server/public/healthcheck/actions";

describe('Action: HealthCheck', () => {
  const mockRes = sinon.spy();
  const mockNext = sinon.spy();

  beforeEach(async () => {
    const res = {
      send: mockRes,
    };

    const next = mockNext;

    const req = {
      body: {},
    };

    await statusServer(req, res, next);
  });

  it('expect res.json has been called', () => {
    expect(mockRes.called).to.be.true;
  });

});
