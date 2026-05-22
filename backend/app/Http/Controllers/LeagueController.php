<?php

namespace App\Http\Controllers;

use App\Services\LeagueService;

class LeagueController extends Controller
{
    public function __construct(private LeagueService $leageusService){}
}
