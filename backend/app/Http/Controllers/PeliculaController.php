<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pelicula;

class PeliculaController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Peliculas = Pelicula::where('activo', '=', 1)
            ->select('idPelicula', 'nombre', 'img')
            ->get();

        return $Peliculas;
        // return $this->sendError("Error Conocido", "Error controlado", 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $Pelicula = new Pelicula();
            $Pelicula->nombre = $request->input('nombre');
            $Pelicula->img = $request->input('img');
            $Pelicula->save();
            return $this->sendResponse($Pelicula, "Pelicula ingresada correctamente");
        } catch (\Exception $e) {
            return $this->sendError("Error Conocido", "Error al crear la Pelicula", 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Pelicula = Pelicula::where('idPelicula', $id)
            ->select('idPelicula', 'nombre', 'img')
            ->get();
        return $this->sendResponse($Pelicula, "Pelicula obtenida correctamente");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
