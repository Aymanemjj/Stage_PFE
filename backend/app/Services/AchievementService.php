<?php

namespace App\Services;

use App\Http\Resources\AchievementResource;
use App\Models\Achievement;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class AchievementService
{
    public function listAllAchievements(): JsonResponse
    {
        return response()->json([
            'data' => AchievementResource::collection(Achievement::all()),
        ], 200);
    }

    public function createAchievement(array $data): JsonResponse
    {
        return response()->json([
            'data' => AchievementResource::make(Achievement::create($data)),
        ], 201);
    }

    public function updateAchievement(Achievement $achievement, array $data): JsonResponse
    {
        $achievement->update($data);
        return response()->json([
            'data' => AchievementResource::make($achievement),
        ], 200);
    }

    public function deleteAchievement(Achievement $achievement): Response
    {
        $achievement->delete();
        return response()->noContent();
    }


}
