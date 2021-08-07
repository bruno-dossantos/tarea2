<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('movies')->insert([
            'id' => 1,
            'name' => 'El padrino',
            'img' => 'https://es.web.img3.acsta.net/c_310_420/pictures/18/06/12/12/12/0117051.jpg?coixp=49&coiyp=27',
            'active' => 1
        ]);
        DB::table('movies')->insert([
            'id' => 2,
            'name' => 'La lista de Schindler',
            'img' => 'https://es.web.img3.acsta.net/c_310_420/pictures/19/02/12/18/49/4078948.jpg',
            'active' => 1
        ]);
        DB::table('movies')->insert([
            'id' => 3,
            'name' => 'El Padrino. Parte II',
            'img' => 'https://es.web.img3.acsta.net/c_310_420/pictures/210/575/21057545_2013111318304486.jpg',
            'active' => 1
        ]);
        DB::table('movies')->insert([
            'id' => 4,
            'name' => 'Cadena perpetua',
            'img' => 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/74/26/88/20133359.jpg',
            'active' => 1
        ]);
        DB::table('movies')->insert([
            'id' => 5,
            'name' => 'Pulp Fiction',
            'img' => 'https://es.web.img3.acsta.net/c_310_420/pictures/17/06/12/10/21/182251.jpg',
            'active' => 1
        ]);
        DB::table('movies')->insert([
            'id' => 6,
            'name' => 'El Rey León',
            'img' => 'https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/68/20/31/19785394.jpg?coixp=47&coiyp=41',
            'active' => 1
        ]);
        DB::table('movies')->insert([
            'id' => 7,
            'name' => 'Forrest Gump',
            'img' => 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/93/24/15/20244789.jpg',
            'active' => 1
        ]);
        DB::table('movies')->insert([
            'id' => 8,
            'name' => 'La vida es bella',
            'img' => 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/61/66/20098979.jpg',
            'active' => 1
        ]);
        DB::table('movies')->insert([
            'id' => 9,
            'name' => 'Gladiator (El gladiador)',
            'img' => 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/70/92/02/20149073.jpg',
            'active' => 1
        ]);
        DB::table('movies')->insert([
            'id' => 10,
            'name' => 'Intocable',
            'img' => 'https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/85/98/42/20002205.jpg',
            'active' => 1
        ]);
    }
}
