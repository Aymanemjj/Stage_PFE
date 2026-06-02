<?php
use App\Http\Controllers\AchievementController;
use App\Http\Controllers\LeagueController;
use App\Http\Controllers\RewardController;
use Illuminate\Support\Facades\Route;

Route::get('/achievements', [AchievementController::class, 'index']);
Route::get('/achievements/{achievement}', [AchievementController::class, 'show']);
Route::post('/achievements', [AchievementController::class, 'store']);
Route::put('/achievements/{achievement}', [AchievementController::class, 'update']);
Route::delete('/achievements/{achievement}', [AchievementController::class, 'destroy']);

Route::get('/leagues', [LeagueController::class, 'index']);
Route::get('/leagues/{league}', [LeagueController::class, 'show']);
Route::post('/leagues', [LeagueController::class, 'store']);
Route::put('/leagues/{league}', [LeagueController::class, 'update']);
Route::delete('/leagues/{league}', [LeagueController::class, 'destroy']);

Route::get('/rewards', [RewardController::class, 'index']);
Route::get('/rewards/{reward}', [RewardController::class, 'show']);
Route::post('/rewards', [RewardController::class, 'store']);
Route::put('/rewards/{reward}', [RewardController::class, 'update']);
Route::delete('/rewards/{reward}', [RewardController::class, 'destroy']);
