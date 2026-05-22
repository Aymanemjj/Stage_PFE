<?php

namespace App\Http\Controllers;

use App\Services\RewardService;

class RewardController extends Controller
{
    public function __construct(private RewardService $rewardsService){}
}
