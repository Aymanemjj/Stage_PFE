<?php

namespace App\Http\Controllers;

use App\Services\AchievementService;
use Illuminate\Http\Request;

class AchievementController extends Controller
{
    public function __construct(private AchievementService $achievementsService){}
}
