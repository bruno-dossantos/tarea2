<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pelicula extends Model
{
    protected $connection='pelicula';
    protected $table='pelicula';
    protected $primaryKey = "idPelicula";
    public $timestamps=false;
}
