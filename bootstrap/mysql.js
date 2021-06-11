/**
 * module for creating mysql connection
 */

 import knex from 'knex';
 import knexconfig from '../../knexfile';
 
 
 export default class Mysql {
   /**
    * creating connection with mysql
    */
   constructor() {
     const proto = Object.getPrototypeOf(this);
     if (!proto.connection) {
       proto.connection = knex(knexconfig[process.env.APP_ENV] || 'development');
     }
   }
 }
 