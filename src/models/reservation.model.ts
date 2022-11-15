import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Reservation extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  guest_name: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  contact_info: string;

  @property({
    type: 'date',
    required: true,
  })
  expected_arrival: string;

  @property({
    type: 'number',
    required: true,
  })
  table_size: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Reservation>) {
    super(data);
  }
}

export interface ReservationRelations {
  // describe navigational properties here
}

export type ReservationWithRelations = Reservation & ReservationRelations;
