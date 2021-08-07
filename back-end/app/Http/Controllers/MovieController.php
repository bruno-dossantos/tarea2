<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;

class MovieController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $Films = Movie::where('active', '=', 1)
                ->select('id', 'name', 'img')
                ->get();

            return $Films;
        } catch (\Exception $e) {
            return $this->sendError($e, "Error controlado", 200);
        }
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
            $Movie = new Movie();
            $Movie->name = $request->input('name');
            $Movie->img = $request->input('img');
            $Movie->save();
            return $this->sendResponse($Movie, "Pelicula ingresada correctamente");
        } catch (\Exception $e) {
            return $this->sendError($e, "Error al crear la Pelicula", 200);
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
        $Movie = Movie::where('id', $id)
            ->select('id', 'name', 'img')
            ->get();
        return $this->sendResponse($Movie, "Pelicula obtenida correctamente");
    }
}
