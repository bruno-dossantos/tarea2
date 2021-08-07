<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    protected $connection='tarea2_dw';
    protected $table='movies';
    protected $primaryKey = "id";
    public $timestamps=false;
}
