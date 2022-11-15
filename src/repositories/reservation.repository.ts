import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CouchbaseDataSource} from '../datasources';
import {Reservation, ReservationRelations} from '../models';

export class ReservationRepository extends DefaultCrudRepository<
  Reservation,
  typeof Reservation.prototype.id,
  ReservationRelations
> {
  constructor(
    @inject('datasources.couchbase') dataSource: CouchbaseDataSource,
  ) {
    super(Reservation, dataSource);
  }
}
