<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAchievementRequest;
use App\Http\Requests\UpdateAchievementRequest;
use App\Models\Achievement;
use App\Services\AchievementService;
use Exception;

class AchievementController extends Controller
{
    public function __construct(private AchievementService $achievementService) {}

    public function index()
    {
        try {
            return $this->achievementService->listAllAchievements();
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function show(Achievement $achievement)
    {
        try {
            return $this->achievementService->showAchievementDetails($achievement);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function store(StoreAchievementRequest $request)
    {
        try {
            return $this->achievementService->createAchievement($request->validated());
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function update(UpdateAchievementRequest $request, Achievement $achievement)
    {
        try {
            return $this->achievementService->updateAchievement($achievement, $request->validated());
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function destroy(Achievement $achievement)
    {
        try {
            return $this->achievementService->deleteAchievement($achievement);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
